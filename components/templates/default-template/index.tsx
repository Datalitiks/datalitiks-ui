
import React from 'react';
import { cx } from '@datalitiks/styled-system/css';
import { styled } from '@datalitiks/styled-system/jsx';
import { type DefaultTemplateProps, defaultTemplateRecipe } from './default-template.recipe';
import { DefaultTemplateRightBar } from './right-bar';
import { DefaultTemplateMain } from './main';
import { DefaultTemplateLeftBar } from './left-bar';
import { DefaultTemplateHeader } from './header';
import { DefaultTemplateFooter } from './footer';

export const DefaultTemplate = ({
    className,
    children,
    ...props
}: DefaultTemplateProps) => {
    return (
        <styled.section
            {...props}
            className={cx(defaultTemplateRecipe({}), className)}>
            {children}
        </styled.section>
    );
};

DefaultTemplate.LeftBar = DefaultTemplateLeftBar
DefaultTemplate.RightBar = DefaultTemplateRightBar
DefaultTemplate.Header = DefaultTemplateHeader
DefaultTemplate.Main = DefaultTemplateMain
DefaultTemplate.Footer = DefaultTemplateFooter
