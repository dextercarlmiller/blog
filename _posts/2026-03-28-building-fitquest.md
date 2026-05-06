---
layout: post
title: "Building FitQuest: What I've Learned So Far"
subtitle: "Notes from building a fitness app as a side project while running a studio."
date: 2026-03-28
tags: [product, typescript, fitquest]
---

Last year I started building [FitQuest](https://github.com/dextercarlmiller/fitquest) — a fitness app aimed at people who are serious about getting in shape but frustrated with existing tools.

I won't lie: I started it partly because I wanted a TypeScript project I actually cared about. But the more I worked on it, the more I believed in the problem it's solving.

Here's what I've learned so far.

## Start With the User You Know Best

The first mistake I almost made was trying to build for everyone.

There are a thousand fitness apps. If you make something for everyone, you've made something for no one. So I narrowed it down: FitQuest is for people who have been training for a while, know what they want to track, and are tired of apps that hold their hand or hide features behind paywalls.

That clarity has made every design decision easier.

## TypeScript Was the Right Call

I debated whether to use TypeScript for this project. It adds overhead up front, but the payoff is real.

The things I've found most valuable:
- **Catching shape mismatches early.** When you're working with workout data — exercises, sets, reps, weights, dates — the schema gets complex fast. TypeScript has caught at least a dozen bugs before they shipped.
- **Self-documenting code.** I can come back to a component after two weeks and understand what it expects without hunting through documentation.
- **Refactoring confidence.** I've changed the data model twice. Each time, TypeScript told me exactly what broke.

If you're building anything that handles structured data, use TypeScript. The activation energy is worth it.

## The Side Project Tax

Here's the honest thing about building a product while running a client business: it's slow.

There are weeks where FitQuest gets zero attention. Client work comes first — that's how the lights stay on. But I've made peace with that. Consistent progress over time beats bursts of intensity followed by burnout.

My current rhythm: I try to make at least one meaningful commit per week, even if it's small. A feature, a fix, a refactor. Keeps the momentum alive without burning out.

## What's Coming

The core tracking loop is mostly built. Next up:
- Progress visualization (charts that actually tell you something useful)
- Offline support (gym Wi-Fi is unreliable)
- Export to CSV (power users want their data)

I'll keep writing about this as it develops. If you're building a side project alongside client work, I'd love to compare notes.
