import React, { useState, FormEvent, useEffect } from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import { Teacher } from '../../models/teacher';
import { Lesson } from '../../models/lesson';
import proffyIcon from '../../assets/images/icons/proffy.svg';

import api from '../../services/api';

import './styles.css';

const TeacherList: React.FC = () => {
  const [fadeState, setFadeState] = useState('hidden');
  const [isSearched, setIsSearched] = useState(false);
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [totalTeachers, setTotalTeachers] = useState<number>(0);

  useEffect(() => {
    setFadeState('visible');
    api.get<Lesson[]>('lesson').then((response) => {
      const lessons = response.data;
      setLessons(lessons);
    });

    api.get<number>('teacherinfo/count').then((response) => {
      const totalTeachersResponse = response.data;
      setTotalTeachers(totalTeachersResponse);
    });
  }, []);

  const [teachers, setTeachers] = useState<Teacher[]>([]);

  const [subject, setSubject] = useState('');
  const [weekDay, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  async function searchTeachers(e: FormEvent) {
    e.preventDefault();
    setIsSearched(true);

    const response = await api.get<Teacher[]>('teacherinfo', {
      params: {
        subject,
        weekDay: +weekDay,
        time,
      },
    });
    console.log('teachers');
    setTeachers(response.data);
  }

  return (
    <div id="page-teacher-list" className={`container ${fadeState}`}>
      <PageHeader
        title="Estes são os proffys disponíveis."
        icon={proffyIcon}
        textIcon={`Nós temos ${totalTeachers} professores.`}
        pageTitle="Estudar"
      >
        <form id="search-teachers" onSubmit={searchTeachers}>
          <Select
            name="subject"
            label="Matéria"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            options={lessons}
          />
          <Select
            name="week-day"
            label="Dia da semana"
            value={weekDay}
            onChange={(e) => setWeekDay(e.target.value)}
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
            type="time"
            label="Hora"
            value={time}
            onChange={(e) => {
              setTime(e.target.value);
            }}
            name="time"
          />

          <button type="submit">Buscar</button>
        </form>
      </PageHeader>

      <main>
        {teachers.map((teacher: Teacher) => {
          return <TeacherItem key={teacher.teacherID} teacher={teacher} />;
        })}
        {isSearched && teachers.length === 0 && (
          <p>Nenhum professor encontrado com sua pesquisa.</p>
        )}
      </main>
    </div>
  );
};

export default TeacherList;
