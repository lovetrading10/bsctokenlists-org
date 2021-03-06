import React from 'react'
import styled from 'styled-components'
import { useCopyClipboard } from '../utils/useCopy'
import { CheckCircle, Copy } from 'react-feather'

const CopyIcon = styled.div`
  color: #aeaeae;
  flex-shrink: 0;
  display: inline-block;
  text-decoration: none;
  width: fit-content;
  :hover,
  :active,
  :focus {
    text-decoration: none;
    opacity: 0.8;
    cursor: pointer;
  }
`
const TransactionStatusText = styled.span`
  margin-left: 0.25rem;
  ${({ theme }) => theme.flexRowNoWrap};
  align-items: center;
  color: black;
`

export default function CopyHelper({ toCopy }) {
  const [isCopied, setCopied] = useCopyClipboard()

  return (
    <CopyIcon onClick={() => setCopied(toCopy)}>
      {isCopied ? (
        <TransactionStatusText>
          <CheckCircle size={'14'} stroke="black" />
          {/* <TransactionStatusText>Copied</TransactionStatusText> */}
        </TransactionStatusText>
      ) : (
        <TransactionStatusText>
          <Copy size={'14'} stroke="black" />
        </TransactionStatusText>
      )}
    </CopyIcon>
  )
}
