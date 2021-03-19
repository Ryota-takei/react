import ReactDom from "react-dom";
import React from "react";

const Section = ({ id, title, children }) => {
  return (
    <>
      <section id={id} class="box">
        <h1 class="title">{title}</h1>
        {children}
      </section>
    </>
  );
};

const Definition = ({ items }) => {
  return (
    <dl class="definition">
      {items.map((item, index) => {
        return (
          <React.Fragment id={index}>
            <dt class="definition-title">{item.title}</dt>
            <dd class="defintion-content">{item.content}</dd>
          </React.Fragment>
        );
      })}
    </dl>
  );
};

const App = () => {
  return (
    <>
      <Section id="react" title="React">
        <Definition
          items={[
            { title: "initilal release", content: "2013/5" },
            { title: "Cithub stars", content: "147,940" }
          ]}
        />
      </Section>
      <Section id="react" title="React">
        <Definition
          items={[
            { title: "initilal release", content: "2013/5" },
            { title: "Cithub stars", content: "147,940" }
          ]}
        />
      </Section>
      <Section id="react" title="React">
        <Definition
          items={[
            { title: "initilal release", content: "2013/5" },
            { title: "Cithub stars", content: "147,940" }
          ]}
        />
      </Section>
    </>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
