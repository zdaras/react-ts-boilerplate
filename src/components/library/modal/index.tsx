import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import { CloseIcon } from '@/components/icons';
import { H2 } from '@/styled/shared';
import { FC } from '@/types';

import { ModalBackgroundStyled, ModalBody, ModalTitle, ModalTopPanel, Close } from './modal-styled';

const Modal: FC<IProps> = ({
	isOpen,
	title,
	closeIcon,
	width,
	height,
	size,
	closeModal,
	children,
	overflow,
	closable,
	centerTitle,
	minWidth
}) => {
	const [fadeType, setFadeType] = useState<'in' | 'out'>('out');

	const handleClose = (e: any) => {
		if (!closable) return;
		if (e) e.preventDefault();
		setFadeType('out');
		setTimeout(() => typeof closeModal === 'function' && closeModal(), 100);
	};

	useEffect(() => {
		setTimeout(() => {
			if (isOpen) setFadeType('in');
		}, 0);
	}, [isOpen]);

	if (isOpen) {
		return ReactDOM.createPortal(
			<ModalBackgroundStyled isOpen={isOpen} onClick={handleClose} fadeType={fadeType}>
				<ModalBody
					width={width}
					height={height}
					size={size}
					overflow={overflow}
					onClick={e => e.stopPropagation()}
					fadeType={fadeType}
					minWidth={minWidth}
				>
					<ModalTopPanel hidden={!title && !closeIcon} centerTitle={centerTitle}>
						<ModalTitle>
							<H2>{title}</H2>
						</ModalTitle>
						{closeIcon && (
							<Close onClick={handleClose}>
								<CloseIcon className="custom" />
							</Close>
						)}
					</ModalTopPanel>
					{children}
				</ModalBody>
			</ModalBackgroundStyled>,
			document.body
		);
	}

	return null;
};

export interface IProps {
	isOpen?: boolean;
	title?: string;
	closeIcon?: boolean;
	width?: string;
	height?: string;
	size?: 'default' | 'small' | 'large';
	closeModal: () => void;
	overflow?: string;
	closable?: boolean;
	centerTitle?: boolean;
	confirmClose?: boolean;
	minWidth?: string;
}

Modal.defaultProps = {
	isOpen: false,
	title: '',
	closeIcon: true,
	size: 'default',
	closable: true,
	centerTitle: false,
	confirmClose: false
} as Partial<IProps>;

export default Modal;
