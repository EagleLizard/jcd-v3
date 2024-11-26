
import './lightbox-modal.scss';
import React from 'react';
import { Modal } from '@mui/base/Modal';

type LightboxModalProps = {
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  onKeyDown?: ($e: React.KeyboardEvent) => void;
};

export function LightboxModal(props: LightboxModalProps) {
  return (
    <Modal
      className="lightbox-modal"
      slots={{
        backdrop: LightboxModalBackdrop,
      }}
      open={props.open}
      onClose={handleOnClose}
      onKeyDown={props.onKeyDown}
    >
      <div className="lightbox-modal-body">
        {
          props.children
        }
      </div>
    </Modal>
  );

  function handleOnClose() {
    props.onClose();
  }
}

type LightboxModalBackdropProps = {
  ownerState: Record<string, any>;
};

const LightboxModalBackdrop = React.forwardRef<
  HTMLDivElement,
  LightboxModalBackdropProps
>(
  function LightboxModalBackdrop(props, ref) {
    const {
      ...rest
    } = props;
    delete rest.ownerState;
    return (
      <div
        className="lightbox-modal-backdrop"
        ref={ref}
        {...rest}
      />
    );
  }
);

