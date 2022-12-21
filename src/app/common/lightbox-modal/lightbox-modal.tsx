
import './lightbox-modal.scss';
import React from 'react';
import ModalUnstyled from '@mui/base/ModalUnstyled';

type LightboxModalProps = {
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  onKeyDown?: ($e: React.KeyboardEvent) => void;
};

export function LightboxModal(props: LightboxModalProps) {
  return (
    <ModalUnstyled
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
    </ModalUnstyled>
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

