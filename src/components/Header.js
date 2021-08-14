import { AppBar, Box, Container, Toolbar, Typography } from '@material-ui/core';

import PropTypes from 'prop-types';

export default function Header({ title, sections = [] }) {
  return (
    <header>
      <AppBar>
        <Container maxWidth="lg">
          <Toolbar className="Header-items">
            <Typography variant="h6">{title}</Typography>
            <Box component="span" className="Header-sections">
              {sections.map((section) => (
                <Typography
                  key={section.name}
                  variant="h6"
                  className="Header-section"
                >
                  {section.name}
                </Typography>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  sections: PropTypes.arrayOf(PropTypes.object),
};
