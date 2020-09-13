import React, { FormEvent, useEffect, useState } from 'react';

import Input from '../../components/Input';
import NavBar from '../../components/NavBar';
import Select from '../../components/Select';
import TextArea from '../../components/TextArea';

import { Lesson } from '../../models/lesson';

import warningIcon from '../../assets/images/icons/warning.svg';

import api from '../../services/api';

import './styles.css';

const Profile: React.FC = () => {
  const [fadeState, setFadeState] = useState('hidden');
  const [lessons, setLessons] = useState<Lesson[]>([]);

  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');

  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');

  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: '' },
  ]);

  useEffect(() => {
    setFadeState('visible');
    api.get<Lesson[]>('lesson').then((response) => {
      const lessons = response.data;
      setLessons(lessons);
    });
  }, []);

  function addNewScheduleItem() {
    setScheduleItems([...scheduleItems, { week_day: 0, from: '', to: '' }]);
  }

  function handleCreateClass(e: FormEvent) {
    e.preventDefault();
  }

  function setScheduleItemValue(
    position: number,
    field: string,
    value: string
  ) {
    const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value };
      }
      return scheduleItem;
    });

    setScheduleItems(updatedScheduleItems);
  }

  return (
    <>
      <section className={`profile ${fadeState}`}>
        <NavBar pageTitle="Meu Perfil" />
        <header className="profile-header-container">
          <article className="profile-header">
            <div className="teacher-info">
              <div className="image-container">
                <img
                  className="avatar"
                  src="https://avatars0.githubusercontent.com/u/48810597?s=460&u=b6c5c0042fdba194cc3dd2dd3b94e86b07f36e87&v=4"
                  alt=""
                />
              </div>
              <h2 className="name">Gleison Almeida</h2>
              <span className="subject">Ciências</span>
            </div>
          </article>
        </header>
        <main className="content">
          <form onSubmit={handleCreateClass}>
            <fieldset>
              <legend>Seus dados</legend>
              <Input
                name="name"
                label="Nome Completo"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <Input
                name="avatar"
                label="Avatar"
                value={avatar}
                onChange={(e) => {
                  setAvatar(e.target.value);
                }}
              />
              <Input
                name="whatsapp"
                label="WhatsApp"
                value={whatsapp}
                onChange={(e) => {
                  setWhatsapp(e.target.value);
                }}
              />
              <TextArea
                name="bio"
                label="Biografia"
                value={bio}
                onChange={(e) => {
                  setBio(e.target.value);
                }}
              />
            </fieldset>

            <fieldset className="about-class">
              <legend>Sobre a aula</legend>
              <div className="input-container">
                <Select
                  name="subject"
                  label="Matéria"
                  value={subject}
                  onChange={(e) => {
                    setSubject(e.target.value);
                  }}
                  options={lessons}
                />

                <Input
                  name="cost"
                  label="Custo da sua hora para aula"
                  value={cost}
                  onChange={(e) => {
                    setCost(e.target.value);
                  }}
                />
              </div>
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
                      name="week-day"
                      label="Dia da semana"
                      value={scheduleItem.week_day}
                      onChange={(e) =>
                        setScheduleItemValue(index, 'week_day', e.target.value)
                      }
                      options={[
                        { value: '0', label: 'Domingo' },
                        { value: '1', label: 'Segunda-feira' },
                        { value: '2', label: 'Terça-feira' },
                        { value: '3', label: 'Quarta-feira' },
                        { value: '4', label: 'Quinta-feira' },
                        { value: '5', label: 'Sexta-feira' },
                        { value: '6', label: 'Sábado' },
                      ]}
                    />
                    <Input
                      name="from"
                      label="Das"
                      type="time"
                      value={scheduleItem.from}
                      onChange={(e) =>
                        setScheduleItemValue(index, 'from', e.target.value)
                      }
                    />
                    <Input
                      name="to"
                      label="Até"
                      type="time"
                      value={scheduleItem.to}
                      onChange={(e) =>
                        setScheduleItemValue(index, 'to', e.target.value)
                      }
                    />
                  </div>
                );
              })}
            </fieldset>

            <footer>
              <p>
                <img src={warningIcon} alt="Aviso Importante" />
                Importante! <br />
                Preencha todos os dados
              </p>
              <button type="submit">Salvar Cadastro</button>
            </footer>
          </form>
        </main>
      </section>
    </>
  );
};

export default Profile;
