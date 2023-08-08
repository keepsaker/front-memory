import FilledStar from '../../assets/Icons/FilledStar';

interface StarProps extends React.SVGProps<SVGSVGElement> {
  filled?: boolean;
}

const Star = (props: StarProps) => {
  const { filled = false, ...rest } = props;

  return <FilledStar color={filled ? '#FDD836' : '#D8D8D8'} {...rest} />;
};

export default Star;
