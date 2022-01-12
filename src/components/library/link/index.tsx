import React, { memo, FC } from 'react';
import { Link as L, LinkProps, NavLink as N, NavLinkProps } from 'react-router-dom';

export const Link: FC<LinkProps> = memo(props => <L {...props}>{props.children}</L>);

export const NavLink: FC<NavLinkProps> = memo(props => <N {...props}>{props.children}</N>);
