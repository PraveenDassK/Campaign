import React from "react";
import { Stepper, Step } from "@material-tailwind/react";
import { RiLightbulbFlashFill } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { FaCircleCheck } from "react-icons/fa6";
import { FaShoppingBasket } from "react-icons/fa";
import { styles } from "../../assets/styles/Globalstyles";
const CustomeStepper = ({
  activeStep = 0,
  setActiveStep,
  isLastStep,
  setIsLastStep,
  isFirstStep,
  setIsFirstStep,
}) => {
  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  return (
    <div className='w-[90%]'>
      <Stepper
        activeStep={activeStep}
        isLastStep={(value) => setIsLastStep(value)}
        activeLineClassName='bg-[#FFB963] '
        completedclassname='bg-[#FFB963]'
        isFirstStep={(value) => setIsFirstStep(value)}>
        <Step
          onClick={() => setActiveStep(0)}
          activeClassName={styles.activeStepper}
          completedClassName={styles.completedStepper}
          className={styles.stepperClassName}>
          <RiLightbulbFlashFill
            className={`${activeStep >= 0 ? "text-white" : "text-[#ABB5C2]"}`}
          />
          <div
            className={`${styles.stepperText} ${
              activeStep >= 0 ? "text-[#0B1A33]" : "text-[#ABB5C2]"
            }`}>
            What do you want
          </div>
        </Step>

        <Step
          onClick={() => setActiveStep(1)}
          activeClassName={styles.activeStepper}
          completedClassName={styles.completedStepper}
          className={styles.stepperClassName}>
          <FaShoppingBasket
            className={`${activeStep >= 1 ? "text-white" : "text-[#ABB5C2]"}`}
          />
          <div
            className={`${styles.stepperText} ${
              activeStep >= 1 ? "text-[#0B1A33]" : "text-[#ABB5C2]"
            }`}>
            Choose Product
          </div>
        </Step>

        <Step
          onClick={() => setActiveStep(2)}
          activeClassName={styles.activeStepper}
          completedClassName={styles.completedStepper}
          className={styles.stepperClassName}>
          <SlCalender
            className={`${activeStep >= 2 ? "text-white" : "text-[#ABB5C2]"}`}
          />
          <div
            className={`${styles.stepperText} ${
              activeStep >= 2 ? "text-[#0B1A33]" : "text-[#ABB5C2]"
            }`}>
            Campaign Settings
          </div>
        </Step>

        <Step
          onClick={() => setActiveStep(3)}
          activeClassName={styles.activeStepper}
          completedClassName={styles.completedStepper}
          className={styles.stepperClassName}>
          <FaCircleCheck
            className={`${activeStep >= 3 ? "text-white" : "text-[#ABB5C2]"}`}
          />
          <div
            className={`${styles.stepperText} ${
              activeStep >= 3 ? "text-[#0B1A33]" : "text-[#ABB5C2]"
            }`}>
            Ready to go
          </div>
        </Step>
      </Stepper>
      {/* <div className='mt-16 flex justify-between'>
        <Button onClick={handlePrev} disabled={isFirstStep}>
          Prev
        </Button>
        <Button onClick={handleNext} disabled={isLastStep}>
          Next
        </Button>
      </div> */}
    </div>
  );
};

export default CustomeStepper;
