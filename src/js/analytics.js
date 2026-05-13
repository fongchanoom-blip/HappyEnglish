// src/js/analytics.js

class Analytics {
  constructor() {
    this.sessionId = this.getOrCreateSessionId();
  }

  getOrCreateSessionId() {
    let sessionId = localStorage.getItem("happyenglish_session_id");
    if (!sessionId) {
      sessionId = "session_" + Date.now() + "_" + Math.random().toString(36).substr(2, 9);
      localStorage.setItem("happyenglish_session_id", sessionId);
    }
    return sessionId;
  }

  trackEvent(name, data = {}) {
    const event = { name, data, timestamp: Date.now(), sessionId: this.sessionId };
    const events = this.getEvents();
    events.push(event);
    if (events.length > 1000) events.splice(0, events.length - 1000);
    localStorage.setItem("happyenglish_events", JSON.stringify(events));
    console.log("[Analytics]", name, data);
  }

  getEvents() {
    try { return JSON.parse(localStorage.getItem("happyenglish_events") || "[]"); }
    catch { return []; }
  }

  trackWordLearned(wordId, correct, duration) {
    this.trackEvent("word_learned", { wordId, correct, duration });
  }

  trackReview(wordId, correct) {
    this.trackEvent("word_reviewed", { wordId, correct });
  }

  trackStoryViewed(wordId, helpful) {
    this.trackEvent("story_viewed", { wordId, helpful });
  }

  trackAIUsage(feature, success) {
    this.trackEvent("ai_used", { feature, success });
  }

  getLearningStats() {
    const events = this.getEvents();
    const stats = {
      totalEvents: events.length,
      wordsLearned: events.filter(e => e.name === "word_learned").length,
      wordsReviewed: events.filter(e => e.name === "word_reviewed").length,
      storiesViewed: events.filter(e => e.name === "story_viewed").length,
      aiUsed: events.filter(e => e.name === "ai_used").length
    };
    const today = new Date().setHours(0, 0, 0, 0);
    const todayEvents = events.filter(e => e.timestamp >= today);
    stats.todayWords = todayEvents.filter(e => e.name === "word_learned").length;
    stats.todayReviews = todayEvents.filter(e => e.name === "word_reviewed").length;
    return stats;
  }

  clearOldData(daysToKeep = 30) {
    const events = this.getEvents();
    const cutoff = Date.now() - daysToKeep * 24 * 60 * 60 * 1000;
    const filtered = events.filter(e => e.timestamp >= cutoff);
    localStorage.setItem("happyenglish_events", JSON.stringify(filtered));
  }
}

window.analytics = new Analytics();

