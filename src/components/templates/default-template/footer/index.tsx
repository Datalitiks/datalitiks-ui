
import { cx } from '@/styled-system/css';
import { styled } from '@/styled-system/jsx';
import { DefaultTemplateFooterProps, defaultTemplateFooterRecipe } from './footer.recipe';

export const DefaultTemplateFooter = ({
    className,
    children,
    ...props
}: DefaultTemplateFooterProps) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return (
        <styled.footer
            {...props}
            className={cx(defaultTemplateFooterRecipe({}), className)}>
            {children}
        </styled.footer>
    );
};
