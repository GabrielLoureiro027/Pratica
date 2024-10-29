import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="m-5">
      <h1 className="font-semibold">
        Bem vindo ao <span className="">ConnectEvents</span>
      </h1>
      <p className="my-3">
        Na ConnectEvents, acreditamos que cada evento é uma oportunidade única
        de criar conexões significativas. Com uma abordagem personalizada e
        inovadora, nos dedicamos a transformar suas ideias em experiências
        memoráveis. Seja uma festa, uma conferência ou um evento corporativo,
        nossa equipe de especialistas está pronta para planejar e executar cada
        detalhe, garantindo que tudo aconteça de forma impecável. Junte-se a nós
        e descubra como podemos tornar seu próximo evento extraordinário!
      </p>
      <section id="areaEventos" className="font-semibold">
        <h1>Eventos</h1>
        <div id="exibirFotos">
        </div>
      </section>
    </div>
  );
}
