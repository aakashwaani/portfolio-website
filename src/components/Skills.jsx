import { skills } from "../data";

export default function Skills() {
    return (
        <>
            <h4>Tech Skills</h4>
            <div className='tech-skills'>
                {skills.map((skills) =>(
                <button key={Skills.title} className='btn tech-stack-btn'>
                    <span>
                        <img src={skills.image} alt="" />
                        <span>{skills.title}</span>
                    </span>
                </button>
                 ))
                }
            </div>
        </>
    )
}