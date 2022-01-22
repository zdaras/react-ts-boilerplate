import { ValidateResult, MultipleFieldErrors } from 'react-hook-form';

export type Ref = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | HTMLDivElement | any;

export interface IFieldError {
	type: string;
	message?: string;
	ref?: Ref;
	types?: MultipleFieldErrors;
	isManual?: boolean;
}

export type IFormErrors = Partial<Record<string, IFieldError>>;

export type IVal = (data: any) => ValidateResult | Promise<ValidateResult>;

export type IValidation = IVal | Record<string, IVal>;

type ValidationOptionObject<Value> =
	| Value
	| {
			value: Value;
			message: string;
	  };

export type IRegExp = ValidationOptionObject<RegExp>;

export interface IModes {
	create: 'create';
	edit: 'edit';
}
export interface IFormState {
	mode: keyof IModes;
	isOpen: boolean;
	selectedItem: Record<string, any>;
}

export type IFormReset = (values?: Partial<Record<string, any>>) => void;
