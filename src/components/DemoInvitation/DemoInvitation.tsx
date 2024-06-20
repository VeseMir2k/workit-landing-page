import imageFounder from '../../assets/image-founder.webp';
import styles from './DemoInvitation.module.css';

const DemoInvitation = () => {
  const { 'demo-invitation': demoInvitationClass, 'demo-invitation__image-founder': imageFounderClass } = styles;

  return (
    <div className={demoInvitationClass}>
      <img className={imageFounderClass} src={imageFounder} alt="image founder" />
    </div>
  );
};

export default DemoInvitation;
