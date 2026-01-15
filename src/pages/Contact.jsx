import React, { useEffect, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "../assets/logo2.png";
import "./Contact.css";

const QUESTIONS = [
  {
    id: "q1",
    type: "text",
    title: "Vaše ime",
    placeholder: "npr. Ivan Horvat",
    pageTitle: "Osnovni podaci",
    pageText: "Ostavite osnovne podatke kako bismo vas mogli kontaktirati."
  },
  {
    id: "q2",
    type: "text",
    title: "Kada planirate izvođenje radova?",
    placeholder: "npr. DD/MM/GGGG",
    pageTitle: "Osnovni podaci",
    pageText: "Ostavite osnovne podatke kako bismo vas mogli kontaktirati."
  },
  {
    id: "q3",
    type: "text",
    title: "Lokacija prostora",
    placeholder: "npr. Osijek",
    pageTitle: "OSNOVNI PODACI",
    pageText: "Ostavite osnovne podatke kako bismo vas mogli kontaktirati."
  },

  {
    id: "kvadratura",
    type: "options",
    fullPage: true,
    pageTitle: "Veličina prostora",
    pageText: "Odaberite približnu kvadraturu prostora",
    options: [
      {
        title: "Mala površina",
        text: "~30–60 m² (npr. kuhinja, manja garaža, ured)"
      },
      {
        title: "Srednja površina",
        text: "~65–95 m² (npr. dnevni boravak, radionica)"
      },
      {
        title: "Velika površina",
        text: "~100+ m² (npr. industrijska hala, skladište)"
      }
    ]
  },

  {
    id: "materijal",
    type: "options",
    fullPage: true,
    pageTitle: "Usluge",
    pageText: "Odaberite vrstu završne obrade",
    options: [
      {
        title: "Metallic Epoxy",
        text: "Epoksi s metalik pigmentima koji daje mramorni efekt."
      },
      {
        title: "Jednobojni Epoxy",
        text: "Jednostavna i čista završna obrada u raznim bojama."
      },
      {
        title: "Flake Epoxy (Chips)",
        text: "Vinilni čips za protukliznu i dekorativnu površinu."
      },
      {
        title: "Brušenje i zaštita",
        text: "Za prostore s velikim opterećenjem i prometom."
      }
    ]
  },

  {
    id: "budget",
    type: "text",
    fullPage: true,
    title: "Budžet projekta",
    placeholder: "npr. 2500 €",
    pageTitle: "Budžet",
    pageText:
      "Cijene epoksidnih podova kreću se od cca 40 € / m². Konačna cijena ovisi o stanju podloge, vrsti završne obrade i kvadraturi.",
      pageNote: "[Minimalna vrijednost projekta: 1 500 €]"
  },

  {
    id: "email",
    type: "email",
    title: "Email adresa",
    placeholder: "ime@primjer.com",
    pageTitle: "Kontakt podaci",
    pageText: "Na kraju nam ostavite kontakt podatke."
  },
  {
    id: "phone",
    type: "text",
    title: "Broj telefona",
    placeholder: "+385 91 123 4567",
    pageTitle: "Kontakt podaci",
    pageText: "Na kraju nam ostavite kontakt podatke."
  }
];

export default function ContactWizard() {
  useEffect(() => {
    document.title = "Kontakt | Epoksi podovi";
  }, []);

  const [page, setPage] = useState(0);
  const [answers, setAnswers] = useState({});

  /* PAGINACIJA */
  const pages = [];
  let buffer = [];

  QUESTIONS.forEach(q => {
    if (q.fullPage) {
      if (buffer.length) pages.push(buffer);
      pages.push([q]);
      buffer = [];
    } else {
      buffer.push(q);
      if (buffer.length === 3) {
        pages.push(buffer);
        buffer = [];
      }
    }
  });
  if (buffer.length) pages.push(buffer);

  const visibleQuestions = pages[page];
  const isLastPage = page === pages.length - 1;

  function handleChange(id, value) {
    setAnswers(prev => ({ ...prev, [id]: value }));
  }

  function canProceed() {
    return visibleQuestions.every(q => {
      const val = answers[q.id];
      if (!val || !val.trim()) return false;
      if (q.type === "email") {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
      }
      return true;
    });
  }

  function handleNext(e) {
    e.preventDefault();
    if (!canProceed()) return;
    if (!isLastPage) setPage(p => p + 1);
  }

  function handleBack() {
    if (page > 0) setPage(p => p - 1);
  }

  return (
    <div className="contact-container">
      <div className="contact-left">
        <Link to="/">
          <img src={logo} alt="Logo" className="contact-logo" />
        </Link>
      </div>

      <div className="contact-right">
        {visibleQuestions[0]?.pageTitle && (
          <h2 className="page-title">{visibleQuestions[0].pageTitle}</h2>
        )}

        {visibleQuestions[0]?.pageText && (
          <p className="page-text">{visibleQuestions[0].pageText}</p>
        )}
        {visibleQuestions[0]?.pageNote && (
  <p className="page-note">{visibleQuestions[0].pageNote}</p>
)}

        <form className="contact-form" onSubmit={handleNext}>
          {visibleQuestions.map(q => (
            <div key={q.id} className="question">
              {q.type !== "options" && (
                <div className="input-title">{q.title}</div>
              )}

              {q.type === "options" ? (
                <div className="options-container">
                  {q.options.map(opt => (
                    <button
                      key={opt.title}
                      type="button"
                      onClick={() => handleChange(q.id, opt.title)}
                      className={answers[q.id] === opt.title ? "selected" : ""}
                    >
                      <strong>{opt.title}</strong>
                      <p>{opt.text}</p>
                    </button>
                  ))}
                </div>
              ) : (
                <input
                  type={q.type}
                  placeholder={q.placeholder}
                  value={answers[q.id] || ""}
                  onChange={e => handleChange(q.id, e.target.value)}
                />
              )}
            </div>
          ))}

          <div className="form-buttons">
            {page > 0 && (
  <button type="button" onClick={handleBack} className="back-arrow">
  <FiArrowLeft size={20} /> {/* manja strelica */}
</button>
)}
            <button type="submit">
              {isLastPage ? "Pošalji upit" : "Dalje"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
