import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 55%;
    margin: 0 auto;
    margin-top: 2.5rem;
    padding: 1.5rem;
    border: 1px solid #e9ecef;
    background-color: #fff;
    box-shadow: 0 0.5rem 2rem #dee2e6;

    @media screen and (max-width: 768px) {
        width: calc(100% - 3rem);
        margin: 2.5rem 1.5rem 0;
    }

    .todo {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 1rem 0;
        font-size: 1.4rem;
        box-shadow: 0 .5rem 1rem #dee2e6;
        padding: 1rem;

        &__task {
            flex-basis: 60%;
        }

        &__buttons {
            text-align: end;
            font-size: 1.6rem;

            & > *:hover {
                transform: scale(1.2);
                cursor: pointer;
            }
            & > *:first-child:hover {
                color: green;
            }
            & > *:nth-child(2):hover {
                fill: orange;
            }
            & > *:last-child:hover {
                color: red;
            }
            & > *:not(:last-child) {
                margin-right: 1rem;
            }
        }

        &:hover {
            box-shadow: 0 .7rem 2rem #dee2e6;
        }

        @media screen and (max-width: 480px) {
           
            &__buttons {
                & > *:not(:last-child) {
                    margin-right: .7rem;
                }
            }
        }
        @media screen and (max-width: 380px) {
            &__task {
                flex-basis: 55%;
            }
           
            &__buttons {
               text-align: end;
               font-size: 1.5rem;

               & > *:not(:last-child) {
                   margin-right: .2rem;
               }
           }
       }
    }

    .completed {
        text-decoration: line-through;
    }
`;