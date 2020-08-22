import React from 'react';

import BackButtonArrow from '../../components/Buttons/BackButtonArrow'
import MediumBasicButton from '../../components/Buttons/MediumBasicButton'


class Profile extends React.Component {
  render () {
    return (
      <div>
        <BackButtonArrow />
        <div>foto perfil</div>
        <p>Daniela Olivares</p>
        <span>Pequeña biografía</span>
        <section>
          <MediumBasicButton>
            Seguir
          </MediumBasicButton>
          <MediumBasicButton>
            Mensaje
          </MediumBasicButton>
        </section>
        <section>
          <article>1</article>
          <article>2</article>
          <article>3</article>
          <article>4</article>
          <article>5</article>
          <article>6</article>
          <article>7</article>
          <article>8</article>
          <article>9</article>
          <article>10</article>
          <article>11</article>
          <article>12</article>
        </section>
      </div>
    )
  }
}

export default Profile;