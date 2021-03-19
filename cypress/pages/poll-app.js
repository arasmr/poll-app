/// <reference types="cypress" />

export default class PollApp {
    getAnswerInputField() {
        return cy.get('.answers_form > .input_container > input');
    }

    getQuestionInputField() {
        return cy.get('.question > .input_container > input');
    }

    getAddAnswerButton() {
        return cy.get('.answers_form > button');
    }

    getResetButton() {
        return cy.get('.questionnaire_count > button');
    }

    getVoteButton() {
        return cy.get('.vote_button');
    }

    getAnswerCount() {
        return cy.get('.questionnaire_count > p');
    }

    getError() {
        return cy.get('.error');
    }

    getAnswers() {
        return cy.get('.answers_item');
    }

    getChartHeader() {
        return cy.get('.chart_header > h5');
    }

    getVoteHeader() {
        return cy.get('.vote_header > h5');
    }

    getVoteOption() {
        return cy.get('.vote_option > p');
    }

    getFirstVoteOption() {
        return cy.get('.vote_options > :nth-child(1) > input');
    }
}