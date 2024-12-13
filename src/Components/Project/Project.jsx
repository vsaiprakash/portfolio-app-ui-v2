import CustomButton from '../CustomButton/CustomButton.jsx';
import SkillCardsHolder from '../SkillCardsHolder/SkillCardsHolder.jsx';
import './Project.css';

function Project({
    title, description = '', imgUrl,
    liveLink, githubLink, skills = {}, disabled='false' }) {
    let liveConfig = {
        href: liveLink,
        emoji: '🔴',
        disabled
    };
    let githubConfig = {
        href: githubLink,
        icon: './assets/icons/github.svg',
        disabled
    }
    return (
        <div className='project-container'>
            <div className='project-title'>{title}</div>
            <img className='project-screenshot' src={imgUrl} />
            <SkillCardsHolder skills={skills} />
            <div className='project-buttons-container'>
                <CustomButton value='Live' type='link' config={liveConfig} />
                <CustomButton value='Github' type='link' config={githubConfig} />
            </div>
        </div>
    );
}

export default Project;