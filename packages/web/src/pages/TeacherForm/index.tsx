import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import api from '../../services/api';

import './styles.css';

const TeacherForm: React.FC = () => {
  const history = useHistory();

  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsApp, setWhatsApp] = useState('');
  const [bio, setBio] = useState('');

  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');

  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: '' }
  ]);

  function addNewScheduleItem() {
    setScheduleItems([
      ...scheduleItems,
      { week_day: 0, from: '', to: '' }
    ]);
  }

  function setScheduleItemValue(position: number, field: string, value: string) {
    const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value };
      }

      return scheduleItem;
    });

    setScheduleItems(updatedScheduleItems);
  }

  function handleCreateClass(event: FormEvent) {

    event.preventDefault();

    api.post('/classes', {
      name,
      avatar,
      whatsApp,
      bio,
      subject,
      cost: Number(cost),
      schedule: scheduleItems
    }).then(() => {
      alert('Cadastro realizado com sucesso!');
      history.push('/');
    }).catch(() => {
      alert('Erro no cadastro!');
    })
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader 
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição" 
      />

      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus dados</legend>

            <Input 
              name="name" 
              label="Nome Completo" 
              type="text" 
              value={name} 
              onChange={(event) => setName(event.target.value)} 
            />

            <Input 
              name="avatar" 
              label="Avatar" 
              type="text" 
              value={avatar} 
              onChange={(event) => setAvatar(event.target.value)} 
            />

            <Input 
              name="whatsapp" 
              label="WhatsApp" 
              type="text" 
              value={whatsApp} 
              onChange={(event) => setWhatsApp(event.target.value)} 
            />

            <TextArea 
              name="bio" 
              label="Biografia" 
              value={bio} 
              onChange={(event) => setBio(event.target.value)} 
            />
          </fieldset>

          <fieldset>        
            <legend>Sobre a aula</legend>
            
            <Select 
              name="subject" 
              label="Matéria"
              value={subject}
              onChange={(event) => { setSubject(event.target.value) }}
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

            <Input 
              name="cost" 
              label="Custo da sua hora por aula" 
              type="text" 
              value={cost}
              onChange={(event) => { setCost(event.target.value) }}
            />
          </fieldset>

          <fieldset>
            <legend>
              Horários disponíveis
              <button type="button" onClick={addNewScheduleItem}>
                + Novo horário
              </button>
            </legend>

            {scheduleItems.map((scheduleItem, index) => {
              return (
                <div key={scheduleItem.week_day} className="schedule-item">
                  <Select 
                    name="week_day" 
                    label="Dia da semana"
                    value={scheduleItem.week_day}
                    onChange={event => setScheduleItemValue(index, 'week_day', event.target.value)}
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
                    name="from" 
                    label="Das" 
                    type="time"
                    value={scheduleItem.from}
                    onChange={event => setScheduleItemValue(index, 'from', event.target.value)} 
                  />

                  <Input 
                    name="to" 
                    label="Até" 
                    type="time" 
                    value={scheduleItem.to}
                    onChange={event => setScheduleItemValue(index, 'to', event.target.value)}
                  />
                </div>
              );
            })}
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso importante"/>
              Importante <br />
              Preencha todos os dados
            </p>
            <button type="submit">
              Salvar cadastro
            </button>
          </footer>
        </form>
      </main>
    </div>
  );
}

export default TeacherForm;
