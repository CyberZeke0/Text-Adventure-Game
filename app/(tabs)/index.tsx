import { useState } from "react";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const BACKGROUNDS = {
  welcome:
    "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&q=80",
  level1:
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
  level1_left:
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
  level1_right:
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
  level2:
    "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80",
  level2_riddle:
    "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80",
  level3:
    "https://images.unsplash.com/photo-1520962922320-2038eebab146?w=800&q=80",
  gameover:
    "https://images.unsplash.com/photo-1520962922320-2038eebab146?w=800&q=80",
  win: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&q=80",
};

export default function MeiyGame() {
  const [gameState, setGameState] = useState("welcome");
  const [storyText, setStoryText] = useState([]);
  const [level, setLevel] = useState(1);

  const addText = (text, newState, newLevel = null) => {
    setStoryText((prev) => [...prev, text]);
    setGameState(newState);
    if (newLevel) setLevel(newLevel);
  };

  const resetGame = () => {
    setGameState("welcome");
    setStoryText([]);
    setLevel(1);
  };

  const renderButtons = (buttons) => (
    <View style={styles.buttonGroup}>
      {buttons.map((btn) => (
        <TouchableOpacity
          key={btn.label}
          style={styles.choiceBtn}
          onPress={btn.onPress}
        >
          <Text style={styles.choiceBtnEmoji}>{btn.emoji}</Text>
          <Text style={styles.choiceBtnText}>{btn.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  const bg = BACKGROUNDS[gameState] || BACKGROUNDS.welcome;

  if (gameState === "welcome") {
    return (
      <ImageBackground
        source={{ uri: bg }}
        style={styles.bgImage}
        imageStyle={styles.bgImageStyle}
      >
        <View style={styles.overlay}>
          <ScrollView contentContainerStyle={styles.content}>
            <View style={styles.welcomeBox}>
              <Text style={styles.goatEmoji}>🐐</Text>
              <Text style={styles.welcomeTitle}>Meiy the Goat</Text>
              <Text style={styles.welcomeDesc}>
                You are a young farmer tasked with finding Meiy, the runaway
                goat. Track her using clues, solve obstacles and interact with
                characters before nightfall.
              </Text>
              <View style={styles.levelBadges}>
                <View style={styles.levelBadge}>
                  <Text style={styles.levelBadgeText}>🌾 Level 1: Farm</Text>
                </View>
                <View style={styles.levelBadge}>
                  <Text style={styles.levelBadgeText}>🌲 Level 2: Forest</Text>
                </View>
                <View style={styles.levelBadge}>
                  <Text style={styles.levelBadgeText}>🦁 Level 3: Cave</Text>
                </View>
              </View>
              <TouchableOpacity
                style={styles.startBtn}
                onPress={() =>
                  addText(
                    "You step outside the farm. The morning sun is warm on your face. Meiy is nowhere to be seen! Do you search left or right?",
                    "level1",
                  )
                }
              >
                <Text style={styles.startBtnText}>🌅 Start Adventure</Text>
              </TouchableOpacity>
              <Text style={styles.developer}>
                Developer: Ezekiel | Powered by 14th Tech
              </Text>
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    );
  }

  if (gameState === "gameover") {
    return (
      <ImageBackground
        source={{ uri: bg }}
        style={styles.bgImage}
        imageStyle={styles.bgImageStyle}
      >
        <View style={styles.overlay}>
          <ScrollView contentContainerStyle={styles.content}>
            <View style={styles.storyLog}>
              {storyText.map((text, index) => (
                <View key={index} style={styles.storyLine}>
                  <Text style={styles.storyArrow}>▶</Text>
                  <Text style={styles.storyText}>{text}</Text>
                </View>
              ))}
            </View>
            <View style={styles.endBox}>
              <Text style={styles.endEmoji}>💔</Text>
              <Text style={styles.endTitle}>Game Over</Text>
              <Text style={styles.endDesc}>
                You didn't find Meiy in time. Night has fallen on the farm.
              </Text>
              <TouchableOpacity style={styles.retryBtn} onPress={resetGame}>
                <Text style={styles.retryBtnText}>🔄 Try Again</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    );
  }

  if (gameState === "win") {
    return (
      <ImageBackground
        source={{ uri: bg }}
        style={styles.bgImage}
        imageStyle={styles.bgImageStyle}
      >
        <View style={styles.overlay}>
          <ScrollView contentContainerStyle={styles.content}>
            <View style={styles.storyLog}>
              {storyText.map((text, index) => (
                <View key={index} style={styles.storyLine}>
                  <Text style={styles.storyArrow}>▶</Text>
                  <Text style={styles.storyText}>{text}</Text>
                </View>
              ))}
            </View>
            <View style={styles.endBox}>
              <Text style={styles.endEmoji}>🎉</Text>
              <Text style={styles.endTitle}>YOU FOUND MEIY!</Text>
              <Text style={styles.endDesc}>
                Meiy is safe and back on the farm. The village celebrates your
                bravery!
              </Text>
              <TouchableOpacity style={styles.retryBtn} onPress={resetGame}>
                <Text style={styles.retryBtnText}>🔄 Play Again</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    );
  }

  return (
    <ImageBackground
      source={{ uri: bg }}
      style={styles.bgImage}
      imageStyle={styles.bgImageStyle}
    >
      <View style={styles.overlay}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>🐐 Meiy the Goat</Text>
          <View style={styles.levelPill}>
            <Text style={styles.levelPillText}>Level {level}</Text>
          </View>
        </View>

        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.content}
        >
          {storyText.length > 0 && (
            <View style={styles.storyLog}>
              {storyText.map((text, index) => (
                <View key={index} style={styles.storyLine}>
                  <Text style={styles.storyArrow}>▶</Text>
                  <Text style={styles.storyText}>{text}</Text>
                </View>
              ))}
            </View>
          )}

          {gameState === "level1" && (
            <View>
              <View style={styles.levelHeader}>
                <Text style={styles.levelHeaderText}>
                  🌾 Level 1 — The Farm
                </Text>
              </View>
              <Text style={styles.narrativeExtra}>
                As a young farmer, you decide which route to follow. Do you want
                to search left or right?
              </Text>
              {renderButtons([
                {
                  label: "Search Left",
                  emoji: "⬅️",
                  onPress: () =>
                    addText(
                      "You choose left! As you go left, you see a group of local hunters standing by a tree.",
                      "level1_left",
                    ),
                },
                {
                  label: "Search Right",
                  emoji: "➡️",
                  onPress: () =>
                    addText(
                      "You chose to go the right way. As you go right you see a trail of Meiy's tiny feet!",
                      "level1_right",
                    ),
                },
              ])}
            </View>
          )}

          {gameState === "level1_left" && (
            <View>
              <View style={styles.levelHeader}>
                <Text style={styles.levelHeaderText}>
                  🌾 Level 1 — The Farm
                </Text>
              </View>
              <Text style={styles.narrativeExtra}>
                A group of local hunters are standing nearby. What do you do?
              </Text>
              {renderButtons([
                {
                  label: "Ask the hunters",
                  emoji: "🗣️",
                  onPress: () =>
                    addText(
                      '"Have you seen Meiy my Goat?" "No we have not." You take the other path into the forest.',
                      "level2",
                      2,
                    ),
                },
                {
                  label: "Ignore them",
                  emoji: "🚶",
                  onPress: () =>
                    addText(
                      "You decide to take the other path quietly into the forest.",
                      "level2",
                      2,
                    ),
                },
              ])}
            </View>
          )}

          {gameState === "level1_right" && (
            <View>
              <View style={styles.levelHeader}>
                <Text style={styles.levelHeaderText}>
                  🌾 Level 1 — The Farm
                </Text>
              </View>
              <Text style={styles.narrativeExtra}>
                You can see tiny hoof prints on the ground. What do you do?
              </Text>
              {renderButtons([
                {
                  label: "Follow the trail",
                  emoji: "👣",
                  onPress: () =>
                    addText(
                      "You follow the trail and see a large hole! You carefully go around it and enter the forest.",
                      "level2",
                      2,
                    ),
                },
                {
                  label: "Call her name",
                  emoji: "📣",
                  onPress: () =>
                    addText(
                      'You scream "MEIY!" You hear Mehhhhhh from the corner — she runs deeper into the forest!',
                      "level2",
                      2,
                    ),
                },
              ])}
            </View>
          )}

          {gameState === "level2" && (
            <View>
              <View style={styles.levelHeader}>
                <Text style={styles.levelHeaderText}>
                  🌲 Level 2 — The Forest
                </Text>
              </View>
              <Text style={styles.narrativeExtra}>
                You enter the forest. A wide river blocks your path. How do you
                cross?
              </Text>
              {renderButtons([
                {
                  label: "Cross the fallen log",
                  emoji: "🪵",
                  onPress: () =>
                    addText(
                      "The log cracks! You barely make it across, losing your hat. But you made it!",
                      "level2_riddle",
                    ),
                },
                {
                  label: "Build a raft",
                  emoji: "🛶",
                  onPress: () =>
                    addText(
                      "You spend hours building a raft. Meiy's bleats grow fainter! But you cross safely.",
                      "level2_riddle",
                    ),
                },
              ])}
            </View>
          )}

          {gameState === "level2_riddle" && (
            <View>
              <View style={styles.riddleBox}>
                <Text style={styles.riddleIcon}>🔐</Text>
                <Text style={styles.riddleTitle}>Riddle at the Gate!</Text>
                <Text style={styles.riddleText}>
                  "I have keys but no locks. I have space but no room. What am
                  I?"
                </Text>
              </View>
              {renderButtons([
                {
                  label: "A Keyboard",
                  emoji: "⌨️",
                  onPress: () =>
                    addText(
                      "✅ Correct! The gate creaks open! Meiy is just ahead. You rush into the cave area!",
                      "level3",
                      3,
                    ),
                },
                {
                  label: "A Piano",
                  emoji: "🎹",
                  onPress: () =>
                    addText(
                      "❌ Wrong! The gate won't budge. Night falls. Meiy is lost forever...",
                      "gameover",
                    ),
                },
                {
                  label: "A Map",
                  emoji: "🗺️",
                  onPress: () =>
                    addText(
                      "❌ Wrong! The gate won't budge. Night falls. Meiy is lost forever...",
                      "gameover",
                    ),
                },
              ])}
            </View>
          )}

          {gameState === "level3" && (
            <View>
              <View style={styles.levelHeader}>
                <Text style={styles.levelHeaderText}>
                  🦁 Level 3 — The Cave
                </Text>
              </View>
              <Text style={styles.narrativeExtra}>
                Meiy is trapped in a cave! A sleeping wolf guards the entrance.
                What do you do?
              </Text>
              {renderButtons([
                {
                  label: "Sneak past",
                  emoji: "🤫",
                  onPress: () =>
                    addText(
                      "You tiptoe past the wolf and grab Meiy. She nuzzles your face happily! You made it home! 🐐",
                      "win",
                    ),
                },
                {
                  label: "Distract with food",
                  emoji: "🍞",
                  onPress: () =>
                    addText(
                      "The wolf wakes but gobbles your bread. You escape with Meiy! 🐐",
                      "win",
                    ),
                },
                {
                  label: "Fight the wolf",
                  emoji: "⚔️",
                  onPress: () =>
                    addText(
                      "The wolf overpowers you. Game Over! 💔",
                      "gameover",
                    ),
                },
              ])}
            </View>
          )}
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bgImage: { flex: 1 },
  bgImageStyle: { resizeMode: "cover" },
  overlay: { flex: 1, backgroundColor: "rgba(20, 10, 3, 0.75)" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(245,167,35,0.3)",
  },
  headerTitle: { fontSize: 20, fontWeight: "700", color: "#F5D78E" },
  levelPill: {
    backgroundColor: "rgba(139,94,60,0.8)",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  levelPillText: { fontSize: 12, color: "#F5D78E", fontWeight: "600" },
  container: { flex: 1 },
  content: { padding: 16, paddingBottom: 40 },
  storyLog: {
    backgroundColor: "rgba(10,5,2,0.85)",
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "rgba(139,94,60,0.6)",
  },
  storyLine: { flexDirection: "row", gap: 8, marginBottom: 10 },
  storyArrow: { color: "#F5A623", fontSize: 12, marginTop: 2 },
  storyText: { flex: 1, fontSize: 14, color: "#E8D5B0", lineHeight: 22 },
  welcomeBox: {
    alignItems: "center",
    paddingVertical: 60,
    paddingHorizontal: 20,
  },
  goatEmoji: { fontSize: 100, marginBottom: 16 },
  welcomeTitle: {
    fontSize: 32,
    fontWeight: "700",
    color: "#F5D78E",
    marginBottom: 12,
    textAlign: "center",
    textShadowColor: "rgba(0,0,0,0.8)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  welcomeDesc: {
    fontSize: 15,
    color: "#E8D5B0",
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 24,
  },
  levelBadges: {
    flexDirection: "row",
    gap: 8,
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 32,
  },
  levelBadge: {
    backgroundColor: "rgba(61,35,16,0.9)",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "rgba(139,94,60,0.8)",
  },
  levelBadgeText: { fontSize: 13, color: "#F5D78E", fontWeight: "500" },
  startBtn: {
    backgroundColor: "#F5A623",
    borderRadius: 20,
    paddingVertical: 18,
    paddingHorizontal: 48,
    marginBottom: 24,
    shadowColor: "#F5A623",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 8,
  },
  startBtnText: { fontSize: 18, fontWeight: "700", color: "#2C1A0E" },
  developer: {
    fontSize: 11,
    color: "rgba(200,169,110,0.7)",
    textAlign: "center",
  },
  levelHeader: {
    backgroundColor: "rgba(61,35,16,0.9)",
    borderRadius: 12,
    padding: 14,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "rgba(139,94,60,0.8)",
  },
  levelHeaderText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#F5D78E",
    textAlign: "center",
  },
  narrativeExtra: {
    fontSize: 15,
    color: "#E8D5B0",
    marginBottom: 20,
    lineHeight: 24,
    textAlign: "center",
    backgroundColor: "rgba(10,5,2,0.6)",
    borderRadius: 10,
    padding: 12,
  },
  buttonGroup: { gap: 12 },
  choiceBtn: {
    backgroundColor: "rgba(61,35,16,0.9)",
    borderRadius: 16,
    padding: 18,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    borderWidth: 1.5,
    borderColor: "rgba(139,94,60,0.8)",
  },
  choiceBtnEmoji: { fontSize: 32 },
  choiceBtnText: { fontSize: 16, fontWeight: "600", color: "#F5D78E", flex: 1 },
  riddleBox: {
    backgroundColor: "rgba(10,5,2,0.9)",
    borderRadius: 16,
    padding: 24,
    marginBottom: 20,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#F5A623",
  },
  riddleIcon: { fontSize: 48, marginBottom: 8 },
  riddleTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#F5A623",
    marginBottom: 12,
  },
  riddleText: {
    fontSize: 16,
    color: "#E8D5B0",
    textAlign: "center",
    lineHeight: 26,
    fontStyle: "italic",
  },
  endBox: { alignItems: "center", paddingVertical: 30 },
  endEmoji: { fontSize: 100, marginBottom: 16 },
  endTitle: {
    fontSize: 28,
    fontWeight: "700",
    color: "#F5D78E",
    marginBottom: 12,
    textAlign: "center",
    textShadowColor: "rgba(0,0,0,0.8)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  endDesc: {
    fontSize: 15,
    color: "#E8D5B0",
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  retryBtn: {
    backgroundColor: "#F5A623",
    borderRadius: 20,
    paddingVertical: 16,
    paddingHorizontal: 48,
    shadowColor: "#F5A623",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 8,
  },
  retryBtnText: { fontSize: 18, fontWeight: "700", color: "#2C1A0E" },
});
