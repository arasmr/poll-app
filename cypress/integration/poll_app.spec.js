/// <reference types="cypress" />

import PollApp from "../pages/poll-app";
import data from '../fixtures/data.json'

context('Poll app', () => {
    const pollPage = new PollApp();

    beforeEach(() => {
        cy.visit('http://localhost:3000');
    })

    describe('poll question and answer form test', () => {
        it('notifies user when there is no question', () => {
            pollPage.getError().should('have.text', data.questionError)
        })

        it('notifies user when there are less then 2 answers', () => {
            pollPage.getQuestionInputField().type(data.question)
            pollPage.getError()
                .should('have.text', data.answerError)
        })

        it('should disable the answer form input and button when there is no question', () => {
            pollPage.getAnswerInputField().should('be.disabled');
            pollPage.getAddAnswerButton().should('be.disabled');
        })

        it('should create an answer after writing an answer and clicking add button', () => {
            pollPage.getQuestionInputField().type(data.question);
            pollPage.getAnswerInputField().type(data.answer1);
            pollPage.getAddAnswerButton().click();
            pollPage.getAnswers().should('have.length', 1);
        })

        it('should update the count of answers after creation of answer', () => {
            pollPage.getQuestionInputField().type(data.question);
            pollPage.getAnswerInputField().type(data.answer1);
            pollPage.getAddAnswerButton().click();
            pollPage.getAnswers().should('have.length', 1);
            pollPage.getAnswerCount().should('have.text', '1 / 10 answers')
        })

        it('should disable the vote button when there are less than 2 answers', () => {
            pollPage.getQuestionInputField().type(data.question);
            pollPage.getAnswerInputField().type(data.answer1);
            pollPage.getAddAnswerButton().click();
            pollPage.getVoteButton().should('be.disabled');
        })

        it('should have the same question and answer value in create poll form, vote form and result form', () => {
            pollPage.getQuestionInputField().type(data.question);
            pollPage.getVoteHeader().should('have.text', data.question)
            pollPage.getChartHeader().should('have.text', data.question)
            pollPage.getAnswerInputField().type(data.answer1);
            pollPage.getAddAnswerButton().click();
            pollPage.getVoteOption().should('have.text', data.answer1)   
        })

        it('should be possible to vote after adding 2 answers', () => {
            pollPage.getQuestionInputField().type(data.question);
            pollPage.getAnswerInputField().type(data.answer1);
            pollPage.getAddAnswerButton().click();
            pollPage.getAnswerInputField().type(data.answer2);
            pollPage.getAddAnswerButton().click();
            pollPage.getFirstVoteOption().click()
            pollPage.getVoteButton().click();
        })

        it('should reset the whole application after clicking the reset button', () => {
            pollPage.getQuestionInputField().type(data.question);
            pollPage.getAnswerInputField().type(data.answer1);
            pollPage.getAddAnswerButton().click();
            pollPage.getAnswerInputField().type(data.answer2);
            pollPage.getAddAnswerButton().click();
            pollPage.getFirstVoteOption().click()
            pollPage.getVoteButton().click();
            pollPage.getResetButton().click();
            pollPage.getQuestionInputField().should('have.text', '');
            pollPage.getAnswerInputField().should('be.disabled');
        })
    })
})