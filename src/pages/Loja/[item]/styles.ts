import styled from 'styled-components';

export const ButtonGoBack = styled.div`
    margin-top: 1.4rem;
    margin-left: 10.1rem;
    display: flex;
    gap: 22px;
    width: 93px;
    height: 24px;
    cursor: pointer;

    .arrow {
        // site de exemplo da seta: https://www.horadecodar.com.br/2020/04/23/como-fazer-uma-seta-com-css-facil-e-rapido/
        padding: 10px;
        box-shadow: 2px -2px 0 1px #000 inset;
        border: solid transparent;
        border-width: 0 0 2px 2px;
        transform: rotate(45deg);
    }

    .goBack {
        color: #111111;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
    }
`;

export const Wine = styled.div`
    margin-top: 25px;
    margin-left: 289px;
    display: flex;
    gap: 162px;

    .infoImage {
        width: 18rem;
    }
`;

export const InfoWine = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CountryWine = styled.div`
    width: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    .arrowCountry {
        width: 10px;
        height: 5.59px;
        padding: 5px;
        display: flex;
        box-shadow: 2px -2px 0 1px #888888 inset;
        border: solid transparent;
        border-width: 0 0 2px 2px;
        transform: rotate(-135deg);
    }

    .textCountry {
        color: #C81A78;
        font-weight: 700; 
        font-size: 14px;
        line-height: 20px
    }
`;

export const NameWine = styled.h3`
    margin-top: 16px;
    color: #111111;
    font-weight: 700;
    font-size: 28px;
    line-height: 32px;
`;

export const SubInfoWine = styled.div`
    height: 16px;
    margin-top: 8px;
    display: flex;
    gap: 8px;

    p {
        font-size: 14px;
        line-height: 24px;
        font-weight: 400;
        color: #555555;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const PriceMember = styled.p`
    margin-top: 48px;
    color: #C81A78;
    font-weight: 900;
    font-size: 24px;
    line-height: 32px;

    display: flex;
    align-items: center;
    letter-spacing: -0.48675px;

`;

export const PriceNonMember = styled.p`
    margin-top: 8px;
    color: #888888;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-transform: uppercase;
`;