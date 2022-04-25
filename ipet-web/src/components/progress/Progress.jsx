import * as React from 'react';
import PropTypes from 'prop-types';
import { Box, styled } from '@material-ui/core';
import { Stepper } from '@material-ui/core';
import { Step } from '@material-ui/core';
import { StepLabel } from '@material-ui/core';
import { CheckOutlined } from '@material-ui/icons';

const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  color: '#eaeaf0',
  display: 'flex',
  height: 22,
  alignItems: 'center',
  ...(ownerState.active && {
    color: '#FEC302',
  }),
  '& .QontoStepIcon-completedIcon': {
    color: '#FEC302',
    zIndex: 1,
    fontSize: 18,
  },
  '& .QontoStepIcon-circle': {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
}));

function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <CheckOutlined className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
};

const steps = ['Carrinho', 'Pagamento', 'Entrega'];

export default function CustomizedSteppers() {
  return (
    <Box sx={{ width: '100%', backgroundColor: 'transparent' }} spacing={4}>
      <Stepper style={{ backgroundColor: "transparent" }} alternativeLabel activeStep={1}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
