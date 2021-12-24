import clsx from "clsx";
import React, { PureComponent } from "react";
import classes from "./Modal.module.scss";
import Wrapper from "./Wrapper";

class Modal extends PureComponent {
  componentDidUpdate() {
    const { modal } = this.props;

    setTimeout(() => {
      if (modal) {
        document.addEventListener("click", this.close);
      } else {
        document.removeEventListener("click", this.close);
      }
    }, 0);
  }

  close = () => {
    this.props.hideModal();
  };

  render() {
    const { children, modal, isOpen, modalIsOpen } = this.props;

    const modalClasses = clsx({
      [classes.overlay]: true,
      [classes.showModal]: modal,
      [classes.showModal2]: isOpen,
      [classes.showModal3]: modalIsOpen
    });

    return (
      <div className={modalClasses}>
        <Wrapper className={classes.overlay__container}>
          <div className={classes.modal} onClick={(e) => e.stopPropagation()}>
            {children}
          </div>
        </Wrapper>
      </div>
    );
  }
}

export default Modal;
