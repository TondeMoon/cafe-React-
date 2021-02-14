import React from 'react';
import '../App.css';

const Contacts = () => {
  return (
    <div>
      <h2>Контакты</h2>
      <p>Санкт-Петербург, Улица Зеленая, 10 </p>
      <p> + 7(933)233-89-90</p>
      <iframe
        className="map"
        title="googlemap"
        src={
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9833318567335!2d30.139248711941885!3d59.784168014021404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46963cf5db3228e5%3A0x18725f9e6a4b43d0!2z0JfQtdC70ZHQvdCw0Y8g0YPQuy4sINCh0LDQvdC60YIt0J_QtdGC0LXRgNCx0YPRgNCzLCAxOTgzMjM!5e0!3m2!1sru!2sru!4v1611311816113!5m2!1sru!2sru'
        }
      />
    </div>
  );
};

export default Contacts;
