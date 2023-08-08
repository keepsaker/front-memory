import useModal from '../../../hooks/useModal';

export interface TriggerProps {
  type: 'open' | 'close' | 'toggle';
  className?: string;
  ariaLabel?: string;
}

const Trigger = (props: React.PropsWithChildren<TriggerProps>) => {
  const { type, children, className, ariaLabel } = props;
  const { show, hide, toggle } = useModal();

  const triggerModal = () => {
    if (type === 'open') show();
    if (type === 'close') hide();
    if (type === 'toggle') toggle();
  };

  return (
    <button
      type="button"
      className={className}
      onClick={triggerModal}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default Trigger;
