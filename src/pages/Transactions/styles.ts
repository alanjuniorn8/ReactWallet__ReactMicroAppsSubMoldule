import styled from 'styled-components'

export const TransactionsContainer = styled.div`
  margin: 4rem auto 0 auto;
  padding: 0 1.5rem;

  max-width: 1120px;
  width: 100%;
`

export const TransactionsTable = styled.table`
  border-collapse: separate;
  border-spacing: 0 0.5rem;

  margin-top: 1.5rem;

  width: 100%;

  td {
    background: ${(props) => props.theme['gray-700']};

    padding: 1.25rem 2rem;

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;

      width: 50%;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`

interface PriceHighlightProps {
  variant: 'income' | 'outcome'
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${(props) =>
    props.variant === 'income'
      ? props.theme['green-300']
      : props.theme['red-300']};
`
