import PropTypes from 'prop-types';
import {Section, Title} from 'components/FeedbackSection/FeedbackSection.styled';


export const FeedbackSection = ({title, children}) => {
  return (
    <Section>
      <Title>{title}</Title>
      {children}
    </Section>
  )
}

FeedbackSection.propTypes = {
  title: PropTypes.string.isRequired,
};







