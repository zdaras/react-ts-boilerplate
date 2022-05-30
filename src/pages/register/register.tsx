import { Link } from '@/components/library/link';
import { Flex, FlexItem } from '@/styled/flex';
import { Form, FormInput, ErrorText } from '@/components/form';
import Button from '@/components/library/button';
import { BlockStyled, H5, H1 } from '@/styled/shared';
import Tooltip from '@/components/library/tooltip';
import Helmet from '@/components/shared/helmet';
import { isEmail, isValidPassword } from '@/utils/validator';
import { userActions } from '@/store/ducks/user';
import useActions from '@/hooks/useActions';
import { useTranslation, useApiFormSubmit } from '@/hooks';
import { IRegisterParams } from '@/services/api/user/types';

export const Register = () => {
	const { t } = useTranslation();
	const register = useActions(userActions.register);
	const [registerAction, formError, loading] = useApiFormSubmit(register);

	const onSubmit = async (values: IRegisterParams) => registerAction(values);

	return (
		<>
			<Helmet title={t('Register')} />

			<Flex center full>
				<FlexItem flex="0 1 600px">
					<Form onSubmit={onSubmit}>
						{({ methods }) => {
							const passwordValue = methods.watch('password');

							return (
								<BlockStyled formPadding>
									<H1 weight="600" align="center" margin="0 0 50px">
										{t('Register')}
									</H1>

									<FormInput name="username" label={t('E-mail Address')} validate={isEmail} />

									<FormInput
										type="password"
										name="password"
										label={t('Password')}
										validate={isValidPassword}
										AbsoluteComp={
											<Tooltip
												text={t(
													'Password must be at least 8 characters, with at least one lowercase, one uppercase, one number and one symbol.'
												)}
											/>
										}
									/>

									<FormInput
										type="password"
										name="confirmPassword"
										label={t('Confirm Password')}
										validate={value => (value !== passwordValue ? 'Does not match' : undefined)}
									/>

									<ErrorText center formError={formError} />

									<Button type="submit" text={t('Sign Up')} loading={loading} />

									<Flex center margin="20px 0 0">
										<H5 align="center" padding="12px 0 0">
											{t('Already have an account?')}
										</H5>
										<Link to="/login">
											<Button text={t('Log In')} buttonType="text" padding="10px" />
										</Link>
									</Flex>
								</BlockStyled>
							);
						}}
					</Form>
				</FlexItem>
			</Flex>
		</>
	);
};

export default Register;
