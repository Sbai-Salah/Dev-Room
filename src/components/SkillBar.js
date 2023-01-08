import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
  .container {
    max-width: 800px;
    margin: auto;
    padding: 20px;
  }

  .skills {
    margin: 0 0 30px 0;
    padding: 0;
    width: calc(100% - 50px);
    li {
      display: block;
      position: relative;
      background-color: #888;
      color: #fff;
      margin: 10px 0;
      transition: width 300ms ease-in-out;
      .collapsed & {
        width: 0 !important;
      }
      p {
        padding: 10px;
        margin: 0;
        font-weight: bold;
      }
      span {
        position: absolute;
        right: 10px;
        display: inline-block;
        width: 30px;
        top: 11px;
        text-align: right;
        font-weight: normal;
        color: #fff;
        font-size: 11px;
      }
    }
  }

  // Pen specific styling
  body {
    font-size: 13px;
    background-color: #e7e7e7;
  }

  hr {
    height: 1px;
    border: 0;
    background-color: #ccc;
    margin: 20px 0;
    padding: 0;
  }

  small {
    font-size: 11px;
    color: #666;
    a {
      color: inherit;
    }
  }

`

class SkillBars extends React.Component {
  constructor(props) {
    super(props);
    this.state = { collapsed: true };       
  }
  
  componentDidMount() {
    setTimeout(() => {
      this.setState({ collapsed: false })
    }, 3000);
  }

  render() {
    const { collapsed } = this.state;
    const { hue, saturation, skills } = this.props;

    return(  
      <Styles>
        <div id="app" className={`container ${collapsed ? 'collapsed' : ''}`}>
        <ul className="skills">
          {skills.map((skill, index) => 
            <li
              key={skill.type}
              style={{ width: `${skill.level}%`, backgroundColor: `hsl(${hue}, ${saturation}%, ${100 / (index + 3.5) }%)` }}
            >
              <p>{skill.type}</p>
            </li>
          )}
        </ul>
      </div>
      </Styles>
    )
  }
}

export default SkillBars
  