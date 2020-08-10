import React, { useState, FormEvent } from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import api from '../../services/api';

import './styles.css';

const TeacherList: React.FC = () => {
  const [teachers, setTeachers] = useState([]);

  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  async function handleSearchTeachers(event: FormEvent) {
    event.preventDefault();

    const response = await api.get('/classes', {
      params: {
        subject,
        week_day,
        time
      }
    });

    setTeachers(response.data);
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers" onSubmit={handleSearchTeachers}>
          <Select 
              name="subject" 
              label="Matéria"
              value={subject}
              onChange={(event) => setSubject(event.target.value)}
              options={[
                { value: 'Artes', label: 'Artes' },
                { value: 'Biologia', label: 'Biologia' },
                { value: 'Ciências', label: 'Ciências' },
                { value: 'Educação Física', label: 'Educação Física' },
                { value: 'Física', label: 'Física' },
                { value: 'Geografia', label: 'Geografia' },
                { value: 'História', label: 'História' },
                { value: 'Matemática', label: 'Matemática' },
                { value: 'Português', label: 'Português' },
                { value: 'Química', label: 'Química' },
                { value: 'Redação', label: 'Redação' },
                { value: 'Literatura', label: 'Literatura' },
              ]}
            />
          
          <Select 
            name="week_day" 
            label="Dia da semana"
            value={week_day}
            onChange={(event) => setWeekDay(event.target.value)}
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-Feira' },
              { value: '2', label: 'Terça-Feira' },
              { value: '3', label: 'Quarta-Feira' },
              { value: '4', label: 'Quinta-Feira' },
              { value: '5', label: 'Sexta-Feira' },
              { value: '6', label: 'Sábado' },
            ]}
          />

          <Input 
            name="time" 
            label="Hora" 
            type="time" 
            value={time}
            onChange={(event) => setTime(event.target.value)}
          />

          <button type="submit">
            Buscar
          </button>
        </form>
      </PageHeader>

      <main>
        {teachers.map((teacher: Teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher} />
        })}
      </main>
    </div>
  );
}

export default TeacherList;
