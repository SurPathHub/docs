---
slug: /dayong/setup
title: Setup
tags:
- Dayong
- Python
- Discord Bot
---

## Bot Account Setup

Follow the instructions here: https://discordpy.readthedocs.io/en/stable/discord.html

## Bot Setup

| ❗❗ Before you start, fork your own copy of SurPathHub/Dayong. |
| --------------------------------------------------------------- |

| ❗❗ You can also perform the steps below directly on your copy of Dayong on GitHub |
| ----------------------------------------------------------------------------------- |

| ❗❗ Your copy of the GitHub repository can be used to deploy changes automatically. |
| ------------------------------------------------------------------------------------ |

1. Clone your fork to your local machine.

   HTTP

   ```
   git clone https://github.com/<your username>/Dayong.git
   ```

   SSH

   ```
   git clone git@github.com:<your username>/Dayong.git
   ```

   GitHub CLI

   ```
   gh repo clone <your username>/Dayong.git
   ```

2. Go to the project root directory.

   ```
   cd Dayong
   ```

3. Edit the `config.json` file and its values as necessary.

   The `config.json` file stores public options, settings, properties, configuration, and preferences.

4. After setting up Dayong, `commit` and `push` your changes.

5. [Deploy!](index.md#deployment)

### For local development

1. `git clone` Dayong to your local machine.

2. Go to the project root directory.

   ```
   cd Dayong
   ```

3. Create a copy of `.env.example`. Don't forget to omit the `.example` at the end.

   On Linux and Unix

   ```
   cp .env.example .env
   ```

   On Windows

   ```
   copy .env.example .env
   ```

4. Edit the `.env` file and add your credentials to the corresponding variables.

5. Install [poetry](https://github.com/python-poetry/poetry#installation). Check if poetry is installed by running `poetry --version`.

6. Run `poetry shell`. This will create or start the virtual environment.

7. Run `poetry install`. This will install the project and its dependencies.

8. Edit the `config.json` file and its values as necessary.

   The `config.json` file stores public options, settings, properties, configuration, and preferences.

9. Quickly test if the configuration works by running:

   ```
   python dayong
   ```

10. After setting up Dayong, `git commit` and `git push` your changes.