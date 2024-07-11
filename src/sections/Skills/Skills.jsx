import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-light.svg';
import checkMarkIconLight from '../../assets/checkmark-dark.svg';
import SkillList from '../../common/SkillList';
import { useEffect, useState } from 'react';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();

  const icon = theme === 'light' ? checkMarkIconDark : checkMarkIconLight;

  useEffect(() => {
    setSkills((currentSkillState) => {
      return currentSkillState.map((currentSkill) => {
        return { ...currentSkill, src: icon };
      });
    });
  }, [theme]);

  const [skills, setSkills] = useState([
    {
      id: 1,
      src: icon,
      skill: 'HTML',
    },
    {
      id: 2,
      src: icon,
      skill: 'CSS',
    },
    {
      id: 3,
      src: icon,
      skill: 'JavaScript',
    },
    {
      id: 4,
      src: icon,
      skill: 'React',
    },
    {
      id: 10,
      src: icon,
      skill: 'Vite',
    },
    {
      id: 11,
      src: icon,
      skill: 'Git',
    },
    {
      id: 12,
      src: icon,
      skill: 'Vitest',
    },
    {
      id: 13,
      src: icon,
      skill: 'Jasmine',
    },
  ]);

  const firstRowSkillSet = skills.filter((skill) => {
    return skill.id <= 10;
  });

  const secondRowSkillSet = skills.filter((skill) => {
    return skill.id > 10;
  });

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        {firstRowSkillSet.map((skill) => {
          return <SkillList key={skill.id} skill={skill} />;
        })}
      </div>
      <hr />

      <div className={styles.skillList}>
        {secondRowSkillSet.map((skill) => {
          return <SkillList key={skill.id} skill={skill} />;
        })}
      </div>
      <hr />
    </section>
  );
}

export default Skills;
