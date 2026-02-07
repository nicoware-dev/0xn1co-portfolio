---
title: "How to Decide What to Automate First"
description: "A practical decision framework for prioritizing automation, focusing on stability, ownership, and error cost rather than frequency alone."
pubDate: "2025-11-05"
heroImage: "/blog/how-to-decide-what-to-automate-first.jpeg"
category: "Automation Strategy"
draft: false
---

One of the most common questions I get from teams is: *"What should we automate?"*

Usually, the instinct is to look for the task that happens most often. "We send this email 50 times a day, let's automate it!"

While frequency is a factor, it's often a trap. Automating a high-frequency task that is unstable, poorly defined, or low-value can actually create *more* work in maintenance and error handling than it saves.

Here is a more robust framework for deciding what to automate first.

## The Automation Priority Matrix

Instead of just looking at frequency, evaluate potential automation candidates against these three criteria:

1.  **Stability:** Has the process remained unchanged for the last 3 months?
2.  **Ownership:** Is there a clear human owner who is responsible for the outcome?
3.  **Error Cost:** What is the consequence if this task is done incorrectly?

### 1. Stability > Frequency

If a process changes every week—because you're still figuring out the best way to do it—**do not automate it.**

Automation "freezes" a process in code. If you freeze a process that is still evolving, you will spend more time updating the automation than you would have spent doing the task manually.

**Rule:** Only automate processes that have been stable for at least 4-8 weeks.

### 2. Ownership is Non-Negotiable

"If everyone owns it, no one owns it."

An automated process needs a human owner. This is the person who gets the alert when the API fails, or when the data looks weird. If you can't name the specific person who will own the maintenance of the automation, you aren't ready to build it.

**Rule:** No owner, no automation.

### 3. High Error Cost = High Automation Value

Tasks where a simple typo can cause significant issues (e.g., financial transfers, customer onboarding data, legal compliance) are prime candidates for automation, even if they don't happen very often.

Humans are bad at boring, repetitive attention to detail. Computers are perfect at it.

**Rule:** Prioritize tasks where accuracy is critical.

## The "Do Not Automate" List

Conversely, here are signs you should keep a task manual for now:

*   **Requires subjective judgment:** "Is this customer angry?" (AI is getting better at this, but it's still risky).
*   **High-touch relationship building:** Sales closing calls, sensitive support escalations.
*   **One-off tasks:** If you're only going to do it 5 times ever, just do it manually.

## Summary

Don't just automate what's loud. Automate what is **stable**, **owned**, and **critical**.

Start with a process that is boring, well-defined, and prone to human error. That's your quick win.
