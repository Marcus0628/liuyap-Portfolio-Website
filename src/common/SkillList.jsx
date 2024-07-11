function SkillList({ skill }) {
  return (
    <span>
      <img src={skill.src} alt="Checkmark icon" />
      <p>{skill.skill}</p>
    </span>
  );
}

export default SkillList;
