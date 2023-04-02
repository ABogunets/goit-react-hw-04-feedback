import PropTypes from 'prop-types';
import {Section, Title} from 'components/StatSection/StatSection.styled';


export const StatSection = ({title, children}) => {
  return (
    <Section>
      <Title>{title}</Title>
      {children}
    </Section>
  )
}

StatSection.propTypes = {
  title: PropTypes.string.isRequired,
};