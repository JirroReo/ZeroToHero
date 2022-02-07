#!/usr/bin/env node

import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';

let playerName;
let hearts = 3;
const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
  const rainbowTitle = chalkAnimation.rainbow(`
    Welcome to Jirro's Zero To Hero!
    `
  )

  await sleep();
  rainbowTitle.stop();

  console.log(`
    ${chalk.bgBlue('HOW TO PLAY')} 
    Hello, I am Zero, a process on your computer.
    I will ask you a series of ${chalk.bgYellow('questions')}
    If you get any question wrong I will be ${chalk.bgRed('killed')}
    If you get all right, a ${chalk.bgGreen('Special Prize')} awaits at the end!
  `);
}

async function askName() {
  const answers = await inquirer.prompt({
    name: 'player_name',
    type: 'input',
    message: 'What is your name?',
    default() {
      return 'Player';
    },
  });

  playerName = answers.player_name;
}

async function handleAnswer(isCorrect) {
  const spinner = createSpinner('Checking answer...').start();
  await sleep();

  if (isCorrect) {
    spinner.success({ text: `
    Nice work! ✅✅✅
    🥳🥳🥳 Keep it up!
    ` });
  } else {
    spinner.error({ text: `
    You answered wrong! ❌❌❌
    💀💀💀 Game over, you lose!
    ` });
    process.exit(1);
  }
}

async function handleTen(isCorrect) {
  if (isCorrect) {
    const spinner = createSpinner('Waiting for it to sink in').start();
    await sleep();
    console.clear();
    winner(true);
  } else {
    console.clear();
    spinner.success({ text: `
    It's okay, I understand.
    I hope we remain close! 🥰
    ` });
    process.exit(1);
    }
}

async function winner() {
  console.clear();

  figlet(`
  I love you\n 
  `, (err, data) => {
    console.log(gradient.pastel.multiline(data) + '\n');

    console.log(
      chalk.green(
        `
        I promise to be the best man I can for you.
        `
      )
    );

    console.log(
      chalk.yellow(`
        I love you, Julia.
      `)
    );

    process.exit(0);
  });
}

async function question1(){
  const answers = await inquirer.prompt({
    name: 'question_1',
    type: 'list',
    message: 'JavaScript was created in 10 days then released on\n',
    choices: [
      'May 23rd, 1995',
      'Nov 24th, 1995',
      'Dec 4th, 1995',
      'Dec 17, 1996',
    ],
  });

  return handleAnswer(answers.question_1 === 'Dec 4th, 1995');
}

async function question2(){
  const answers = await inquirer.prompt({
    name: 'question_2',
    type: 'list',
    message: 'HTML method that lets you send form data to a linked PHP form\n',
    choices: [
      'GET',
      'POST',
      'UPDATE',
      'OPTIONS',
    ],
  });

  return handleAnswer(answers.question_2 === 'POST');
}

async function question3() {
  const answers = await inquirer.prompt({
    name: 'question_3',
    type: 'list',
    message: `What is the first element in the array? ['🐏', '🦙', '🐍'].length = 0\n`,
    choices: ['0', '🐏', '🐍', 'undefined'],
  });

  return handleAnswer(answers.question_3 === 'undefined');
}

async function question4() {
  const answers = await inquirer.prompt({
    name: 'question_4',
    type: 'list',
    message: `What keyword causes a loop to skip the remainder of its body?\n`,
    choices: [
      'Skip',
      'Jump',
      'Continue',
      'Break'],
  });

  return handleAnswer(answers.question_4 === 'Continue');
}

async function question5() {
  const answers = await inquirer.prompt({
    name: 'question_5',
    type: 'list',
    message: `Which of the following method can be used to create a MySql database using PHP?\n`,
    choices: [
      'mysql_query()',
      'mysql_connect()',
      'mysql_dbconnect()',
      'mysql_link()'],
  });

  return handleAnswer(answers.question_5 === 'mysql_query()');
}

async function question6() {
  const answers = await inquirer.prompt({
    name: 'question_6',
    type: 'list',
    message: `In Javascript, what will 1 + '23' equal to?\n`,
    choices: [
      '24',
      '123',
      'Undefined',
      'Error'],
  });

  return handleAnswer(answers.question_6 === '123');
}

async function question7() {
  const answers = await inquirer.prompt({
    name: 'question_7',
    type: 'list',
    message: `What PHP function sorts an array in reverse?\n`,
    choices: [
      'sort()',
      'reverse()',
      'tros()',
      'rsort()'],
  });

  return handleAnswer(answers.question_7 === 'rsort()');
}

async function question8() {
  const answers = await inquirer.prompt({
    name: 'question_8',
    type: 'list',
    message: `WHich HTML tag is used to make a text bold?\n`,
    choices: [
      '<i>',
      '<bold>',
      '<b>',
      '<heavy>'],
  });

  return handleAnswer(answers.question_8 === '<b>');
}

async function question9() {
  const answers = await inquirer.prompt({
    name: 'question_9',
    type: 'list',
    message: `Which of the following is the correct way to add a link to any element?\n`,
    choices: [
      'link',
      'ref',
      'href',
      'newref'],
  });

  return handleAnswer(answers.question_9 === 'href');
}

async function question10() {

  console.clear();
  const prompt1 = chalkAnimation.neon(`
    Loading the last question
    `
  )
  await sleep(4000);
  prompt1.stop();

  console.clear();
  const prompt2 = chalkAnimation.neon(`
    We've been talking for a while now..
    `
  )
  await sleep(5000);
  prompt2.stop();

  console.clear();
  const prompt3 = chalkAnimation.neon(`
    And we've joked about it a number of times already
    `
  )
  await sleep(5000);
  prompt3.stop();

  console.clear();
  const prompt5 = chalkAnimation.neon(`
    Im gonna shoot my shot
    `
  )
  await sleep(5000);
  prompt5.stop();

  console.clear();
  const prompt6 = chalkAnimation.neon(`
    And for the last question
    `
  )
  await sleep(5000);
  prompt6.stop();

  const answers = await inquirer.prompt({
    name: 'question_10',
    type: 'list',
    message: `Will you be my girlfriend?\n`,
    choices: [
      'Yes',
      'No'
    ],
  });

  return handleTen(answers.question_10 === 'Yes');
}

console.clear();
await welcome();
await askName();
await question1();
await question2();
await question3();
await question4();
await question5();
await question6();
await question7();
await question8();
await question9();
await question10();
