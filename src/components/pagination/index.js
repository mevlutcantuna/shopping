import ReactPaginate from "react-paginate";
import styled from "styled-components";
import LeftIcon from "../../icons/LeftIcon";
import RightIcon from "../../icons/RightIcon";

const Pagination = ({ pageCount, handlePageClick }) => {
  return (
    <>
      <StyledReactPaginate
        breakLabel="..."
        nextLabel={
          <>
            <StyledPaginateText>Next</StyledPaginateText>
            <RightIcon />
          </>
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel={
          <>
            <LeftIcon />
            <StyledPaginateText>Previous</StyledPaginateText>
          </>
        }
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default Pagination;

const StyledReactPaginate = styled(ReactPaginate)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Open Sans", sans-serif;
  margin-top: 1rem;

  li {
    display: flex;
    align-items: center;
    color: ${(p) => p.theme.colors.gray500};
    font-weight: 500;
    padding: 6px;

    &.selected {
      background: ${(p) => p.theme.colors.primaryBlue};
      border-radius: 2px;
      color: #fff;
      &:hover {
        color: #fff;
      }
    }
    &:hover {
      color: ${(p) => p.theme.colors.primaryBlue};
      cursor: pointer;
    }
    &.previous a {
      display: flex;
      align-items: center;
    }
    &.next a {
      display: flex;
      align-items: center;
    }
    &.disabled {
      opacity: 0.4;
      pointer-events: none;
    }
  }
`;

const StyledPaginateText = styled.span`
  display: flex;

  @media (max-width: ${(p) => p.theme.breakpoints.sm}) {
    display: none;
  }
`;
