import styled from 'styled-components';

export const Wrapper = styled.form`
    width: 55%;
    margin: 0 auto;
    padding: 1.5rem 1.5rem;
    border: 1px solid #e9ecef;
    background-color: #faf9f9;
    box-shadow: 0 0.5rem 2rem #dee2e6;

    @media screen and (max-width: 768px) {
        width: calc(100% - 3rem);
        margin: 0 1.5rem;
    }

    div {
        margin-bottom: 2rem;

        h3 {
            font-size: 1.6rem;
            font-weight: 700;
            padding-bottom: 0.7rem;
        }
        input[type="text"] {
            width: 100%;
            font-size: 1.4rem;
            color: #6c757d;
            padding: 0.5rem;
            border: 1px solid #e9ecef;
            border-radius: 3px;
            outline: none;
        }
        label {
            font-size: 1.4rem;
            margin-right: 0.6rem;
            color: #6c757d;
        }
        label + input {
            margin-right: 1.5rem;
        }
    }

    .btn {
        margin-top: 0.7rem;
        padding: 0.7rem 3.2rem;
        font-weight: 500;
        border-radius: 3px;
    }
    input[type="submit"] {
        border: 1px solid #dee2e6;
        background-image: linear-gradient(to right, #f8f9fa 10%, #dee2e6 100%);

        &:hover {
            background-image: linear-gradient(to right, #dee2e6 10%, #f8f9fa 100%);
            cursor: pointer;
        }
    }

    input[value="Edit"] {
        border: 1px solid #ffc300 ;
        background-image: linear-gradient(to right, #f8f9fa 10%, #ffc300 100%);

        &:hover {
            background-image: linear-gradient(to right, #ffc300  10%, #f8f9fa 100%);
            cursor: pointer;
        }
    }
`;