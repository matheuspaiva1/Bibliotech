"use client";

import { useEffect, useState } from "react";

export default function AlunosPage() {
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    fetch("/api/alunos")
      .then((res) => res.json())
      .then((data) => {
        setAlunos(data.alunos);
      });
  }, []);

  return (
    <div>
      <h1>Lista de Alunos</h1>
      <ul>
        {alunos.map((aluno) => (
          <li key={aluno.id}>
            {aluno.name} - {aluno.age} anos
          </li>
        ))}
      </ul>
    </div>
  );
}
