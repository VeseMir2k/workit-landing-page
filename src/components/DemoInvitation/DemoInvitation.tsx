import styles from './DemoInvitation.module.css';

const DemoInvitation = () => {
  const { 'demo-invitation': demoInvitationClass, 'demo-invitation__image-founder': imageFounderClass } = styles;

  return (
    <div className={demoInvitationClass}>
      {/* <img className={imageFounderClass} src={imageFounder} alt="image founder" /> */}
      <div>
        <h2>Be the first to test</h2>
        <p>
          Hi, I&apos;m Louis Graham, the founder of the company. Book a demo call with me to become a beta tester for
          our app and kickstart your company. Apply for access below and I`ll be in touch to schedule a call.
        </p>
      </div>
    </div>
  );
};

export default DemoInvitation;
