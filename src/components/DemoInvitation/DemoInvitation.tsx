import imageFounder from '../../assets/image-founder.webp';
import Button from '../Button';
import styles from './DemoInvitation.module.css';

const DemoInvitation = () => {
  const {
    'demo-invitation': demoInvitationClass,
    'demo-invitation__container': containerClass,
    'demo-invitation__image-founder': imageFounderClass,
    'demo-invitation__content': contentClass,
    'demo-invitation__title': titleClass,
    'demo-invitation__description': descriptionClass,
  } = styles;

  return (
    <div className={demoInvitationClass}>
      <div className={containerClass}>
        <img className={imageFounderClass} src={imageFounder} alt="image founder" />
        <div className={contentClass}>
          <h2 className={titleClass}>Be the first to test</h2>
          <p className={descriptionClass}>
            Hi, I&apos;m Louis Graham, the founder of the company. Book a demo call with me to become a beta tester for
            our app and kickstart your company. Apply for access below and I`ll be in touch to schedule a call.
          </p>
          <Button variant="full" href="#" text="Apply for access" />
        </div>
      </div>
    </div>
  );
};

export default DemoInvitation;
