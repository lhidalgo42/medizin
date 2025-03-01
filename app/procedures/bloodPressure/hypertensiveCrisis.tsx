import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { Stack, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Svg, { G, Rect, Text as SvgText, Line, Polygon, TSpan } from 'react-native-svg';
import Animated, {
  useAnimatedStyle,
  useSharedValue
} from 'react-native-reanimated';
import i18n from '@/src/i18n';
import { useThemeStore } from '@/src/store/useThemeStore';

interface Node {
  id: string;
  title: string;
  description?: string | string[];
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
  textColor?: string;
}

interface Connection {
  fromId: string;
  toId: string;
  label?: string;
}

export default function HypertensiveCrisisScreen() {
  const { theme } = useThemeStore();
  const isDark = theme === 'dark';

  // Colores basados en la aplicación original
  const colors = {
    title: isDark ? '#004c98' : '#0056b3',
    question: isDark ? '#a0d8f0' : '#b8e2f8',
    yes: isDark ? '#c43434' : '#dc3545',
    no: isDark ? '#e89670' : '#f8a782',
    asymptomatic: isDark ? '#b3d987' : '#c1e5a0',
    headache: isDark ? '#e89670' : '#f8a782',
    treatment: isDark ? '#a0a0a0' : '#cccccc',
    textDark: '#000000',
    textLight: '#ffffff',
    connectionLine: isDark ? '#888888' : '#444444'
  };

  // Nodos del diagrama (se podría cargar desde i18n)
  const [nodes, setNodes] = useState([
    {
      id: 'checkOrganDamage',
      title: i18n.t('procedures.bloodPressure.hypertensiveCrisis.checkOrganDamage.title'),
      description: i18n.t('procedures.bloodPressure.hypertensiveCrisis.checkOrganDamage.steps', { returnObjects: true }),
      x: 200,
      y: 50,
      width: 350,
      height: 100,
      color: colors.question
    },
    {
      id: 'yes',
      title: i18n.t('common.yes'),
      x: 555,
      y: 180,
      width: 60,
      height: 40,
      color: colors.yes,
      textColor: '#ffffff'
    },

    {
      id: 'withOrganDamage',
      title: i18n.t('procedures.bloodPressure.hypertensiveCrisis.withOrganDamage.title'),
      description: i18n.t('procedures.bloodPressure.hypertensiveCrisis.withOrganDamage.steps', { returnObjects: true }),
      x: 475,
      y: 250,
      width: 220,
      height: 90,
      color: colors.treatment
    },
    {
      id: 'acutePulmonaryEdema',
      title: i18n.t('procedures.bloodPressure.hypertensiveCrisis.withOrganDamage.acutePulmonaryEdema.title'),
      x: 470,
      y: 370,
      width: 230,
      height: 60,
      color: colors.treatment
    },
    {
      id: 'ntg',
      title: i18n.t('procedures.bloodPressure.hypertensiveCrisis.withOrganDamage.acutePulmonaryEdema.medications.ntg'),
      x: 480,
      y: 460,
      width: 100,
      height: 40,
      color: colors.treatment
    },
    {
      id: 'furosemide',
      title: i18n.t('procedures.bloodPressure.hypertensiveCrisis.withOrganDamage.acutePulmonaryEdema.medications.furosemide'),
      x: 600,
      y: 460,
      width: 100,
      height: 40,
      color: colors.treatment
    },
    {
      id: 'renal',
      title: i18n.t('procedures.bloodPressure.hypertensiveCrisis.withOrganDamage.renalFailure.title'),
      x: 600,
      y: 530,
      width: 100,
      height: 50,
      color: colors.treatment
    },
    {
      id: 'yes-renal',
      title: i18n.t('common.yes'),
      x: 500,
      y: 610,
      width: 50,
      height: 30,
      color: colors.treatment
    },
    {
      id: 'no-renal',
      title: i18n.t('common.no'),
      x: 625,
      y: 610,
      width: 50,
      height: 30,
      color: colors.treatment
    },
    {
      id: 'high-dose',
      title: i18n.t('procedures.bloodPressure.hypertensiveCrisis.withOrganDamage.renalFailure.yes'),
      x: 475,
      y: 670,
      width: 100,
      height: 50,
      color: colors.treatment
    },
    {
      id: 'low-dose',
      title: i18n.t('procedures.bloodPressure.hypertensiveCrisis.withOrganDamage.renalFailure.no'),
      x: 600,
      y: 670,
      width: 100,
      height: 50,
      color: colors.treatment
    },
    {
      id: 'decrease3',
      title: i18n.t('procedures.bloodPressure.hypertensiveCrisis.withOrganDamage.renalFailure.conclution'),
      x: 480,
      y: 730,
      width: 220,
      height: 60,
      color: '#ffffff'
    },


    {
      id: 'no',
      title: i18n.t('common.no'),
      x: 175,
      y: 180,
      width: 60,
      height: 40,
      color: colors.no
    },

    {
      id: 'headache',
      title: i18n.t('procedures.bloodPressure.hypertensiveCrisis.withoutOrganDamage.mildHeadache.title'),
      x: 225,
      y: 250,
      width: 210,
      height: 40,
      color: colors.headache
    },
    {
      id: 'reduceStimuli',
      title: i18n.t('procedures.bloodPressure.hypertensiveCrisis.withoutOrganDamage.reduceStimuli.title'),
      description: i18n.t('procedures.bloodPressure.hypertensiveCrisis.withoutOrganDamage.reduceStimuli.steps', { returnObjects: true }),
      x: 240,
      y: 320,
      width: 180,
      height: 60,
      color: colors.headache
    },
    {
      id: 'analgesia',
      title: i18n.t('procedures.bloodPressure.hypertensiveCrisis.withoutOrganDamage.ifPain.title'),
      x: 220,
      y: 420,
      width: 100,
      height: 50,
      color: colors.headache
    },
    {
      id: 'bzd',
      title: i18n.t('procedures.bloodPressure.hypertensiveCrisis.withoutOrganDamage.ifAnxiety.title'),
      x: 340,
      y: 420,
      width: 120,
      height: 70,
      color: colors.headache
    },
    {
      id: 'start-med',
      title: i18n.t('procedures.bloodPressure.hypertensiveCrisis.withoutOrganDamage.startAntiHTA.title'),
      description: i18n.t('procedures.bloodPressure.hypertensiveCrisis.withoutOrganDamage.startAntiHTA.steps', { returnObjects: true }),
      x: 260,
      y: 500,
      width: 140,
      height: 70,
      color: colors.headache
    },
    {
      id: 'title-med',
      title: i18n.t('procedures.bloodPressure.hypertensiveCrisis.withoutOrganDamage.titrateAntiHTA.title'),
      x: 260,
      y: 600,
      width: 140,
      height: 70,
      color: colors.headache
    },
    {
      id: 'decrease1',
      title: i18n.t('procedures.bloodPressure.hypertensiveCrisis.withoutOrganDamage.titrateAntiHTA.conclution'),
      x: 260,
      y: 690,
      width: 140,
      height: 50,
      color: '#ffffff'
    },

    {
      id: 'asymptomatic',
      title: i18n.t('procedures.bloodPressure.hypertensiveCrisis.withoutOrganDamage.asymptomatic'),
      x: 70,
      y: 250,
      width: 120,
      height: 40,
      color: colors.asymptomatic
    },
    {
      id: 'previousHTA',
      title: i18n.t('procedures.bloodPressure.hypertensiveCrisis.withoutOrganDamage.previousHTA.title'),
      x: 55,
      y: 320,
      width: 150,
      height: 40,
      color: colors.asymptomatic
    },
    {
      id: 'yes-prev',
      title: i18n.t('common.yes'),
      x: 65,
      y: 385,
      width: 50,
      height: 30,
      color: colors.asymptomatic
    },
    {
      id: 'no-prev',
      title: i18n.t('common.no'),
      x: 135,
      y: 385,
      width: 50,
      height: 30,
      color: colors.asymptomatic
    },
    {
      id: 'restart',
      title: i18n.t('procedures.bloodPressure.hypertensiveCrisis.withoutOrganDamage.previousHTA.yes'),
      x: 25,
      y: 440,
      width: 130,
      height: 85,
      color: colors.asymptomatic
    },
    {
      id: 'study',
      title: i18n.t('procedures.bloodPressure.hypertensiveCrisis.withoutOrganDamage.previousHTA.no.study.title'),
      description: i18n.t('procedures.bloodPressure.hypertensiveCrisis.withoutOrganDamage.previousHTA.no.study.steps', { returnObjects: true }),
      x: 80,
      y: 540,
      width: 160,
      height: 90,
      color: colors.asymptomatic
    },
    {
      id: 'start-usual',
      title: i18n.t('procedures.bloodPressure.hypertensiveCrisis.withoutOrganDamage.previousHTA.no.antiHTA.title'),
      x: 75,
      y: 660,
      width: 170,
      height: 50,
      color: colors.asymptomatic
    },
    {
      id: 'decrease2',
      title: i18n.t('procedures.bloodPressure.hypertensiveCrisis.withoutOrganDamage.previousHTA.no.antiHTA.conclution'),
      x: 100,
      y: 720,
      width: 120,
      height: 50,
      color: '#ffffff'
    }
  ]);

  const [connections, setConnections] = useState<Connection[]>([
    { fromId: 'checkOrganDamage', toId: 'no' },
    { fromId: 'checkOrganDamage', toId: 'yes' },
    { fromId: 'no', toId: 'asymptomatic' },
    { fromId: 'no', toId: 'headache' },
    { fromId: 'yes', toId: 'withOrganDamage' },
    { fromId: 'asymptomatic', toId: 'previousHTA' },
    { fromId: 'headache', toId: 'reduceStimuli' },
    { fromId: 'withOrganDamage', toId: 'acutePulmonaryEdema' },
    { fromId: 'previousHTA', toId: 'yes-prev' },
    { fromId: 'previousHTA', toId: 'no-prev' },
    { fromId: 'yes-prev', toId: 'restart' },
    { fromId: 'no-prev', toId: 'study' },
    { fromId: 'reduceStimuli', toId: 'analgesia' },
    { fromId: 'reduceStimuli', toId: 'bzd' },
    { fromId: 'reduceStimuli', toId: 'start-med' },
    { fromId: 'start-med', toId: 'title-med' },
    { fromId: 'acutePulmonaryEdema', toId: 'ntg' },
    { fromId: 'acutePulmonaryEdema', toId: 'furosemide' },
    { fromId: 'ntg', toId: 'plus' },
    { fromId: 'plus', toId: 'furosemide' },
    { fromId: 'furosemide', toId: 'renal' },
    { fromId: 'renal', toId: 'yes-renal' },
    { fromId: 'renal', toId: 'no-renal' },
    { fromId: 'yes-renal', toId: 'high-dose' },
    { fromId: 'no-renal', toId: 'low-dose' },
    { fromId: 'study', toId: 'start-usual' }
  ]);

  // Variables para gestos y animaciones
  const scale = useSharedValue(1);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  // Estilo animado para el contenedor SVG
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
        { scale: scale.value }
      ]
    };
  });

  // Función para encontrar un nodo por ID
  const findNodeById = (id: string): Node | undefined => {
    return nodes.find(node => node.id === id);
  };

  // Renderizar conexiones entre nodos
  const renderConnections = () => {
    return connections.map((connection, index) => {
      const fromNode = findNodeById(connection.fromId);
      const toNode = findNodeById(connection.toId);

      if (!fromNode || !toNode) return null;

      // Determinar puntos de inicio y fin
      const startX = fromNode.x + fromNode.width / 2;
      const startY = fromNode.y + fromNode.height;
      const endX = toNode.x + toNode.width / 2;
      const endY = toNode.y;

      // Arreglos especiales para conexiones horizontales
      const isHorizontal = Math.abs(startY - endY) < 10;

      let x1 = startX;
      let y1 = startY;
      let x2 = endX;
      let y2 = endY;

      if (isHorizontal) {
        y1 = fromNode.y + fromNode.height / 2;
        y2 = toNode.y + toNode.height / 2;
        x1 = fromNode.x + fromNode.width;
        x2 = toNode.x;
      }

      // Dibujar flecha
      const arrowSize = 6;

      return (
        <G key={`connection-${index}`}>
          <Line
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={colors.connectionLine}
            strokeWidth="2"
          />
          {!isHorizontal && (
            <Polygon
              points={`${endX - arrowSize},${endY - arrowSize} ${endX + arrowSize},${endY - arrowSize} ${endX},${endY}`}
              fill={colors.connectionLine}
            />
          )}
          {isHorizontal && (
            <Polygon
              points={`${x2 - arrowSize},${y2 - arrowSize} ${x2 - arrowSize},${y2 + arrowSize} ${x2},${y2}`}
              fill={colors.connectionLine}
            />
          )}
          {connection.label && (
            <SvgText
              x={(x1 + x2) / 2}
              y={(y1 + y2) / 2 - 5}
              textAnchor="middle"
              fill={isDark ? colors.textLight : colors.textDark}
              fontSize="16"
            >
              {connection.label}
            </SvgText>
          )}
        </G>
      );
    });
  };

  // Renderizar texto con saltos de línea
  const renderNodeText = (node: Node) => {
    const textColor = node.textColor || (isDark ? colors.textDark : colors.textDark);

    if (!node.description) {
      return (
        <SvgText
          x={node.x + node.width / 2}
          y={node.y + 20}
          textAnchor="middle"
          fill={textColor}
          fontWeight="bold"
          fontSize="16"
        >
          {node.title.split('\n').map((line, index) => (
            <TSpan key={`title-${index}`} x={node.x + node.width / 2} dy={index === 0 ? 0 : 15}>
              {line}
            </TSpan>
          ))}
        </SvgText>
      );
    }
    return (
      <G>
        <SvgText
          x={node.x + node.width / 2} y={node.y + 17}
          textAnchor="middle" fill={textColor} fontWeight="bold"
          fontSize="16" width={node.width}
        >
          {node.title.split('\n').map((line, pindex) => (
            <TSpan key={`title-${pindex}`} x={node.x + node.width / 2} dy={pindex === 0 ? 0 : 15}>
              {line}

            </TSpan>
          ))}
        </SvgText>
        {node.description.map((line, index) => (
          <SvgText
            key={`desc-${node.id}-${index}`}
            x={node.x + 10} y={node.y + 25 + node.title.split('\n').length * 10 + index * 14}
            textAnchor="start" fill={textColor} fontSize="10"
          >
            {line}
          </SvgText>
        ))}
      </G>
    );
  };

  // Renderizar nodos del algoritmo
  const renderNodes = () => {
    return nodes.map((node) => (
      <G key={node.id}>
        <Rect
          x={node.x} y={node.y} width={node.width}
          height={node.height} rx={8} ry={8}
          fill={node.color} stroke={isDark ? '#333' : '#666'} strokeWidth="1"
        />
        {renderNodeText(node)}
      </G>
    ));
  };

  // Dimensiones para el SVG
  const svgWidth = 730;
  const svgHeight = 800;

  return (
    <View style={[styles.container, { backgroundColor: isDark ? '#000000' : '#f0f0f0' }]}>
      <Stack.Screen
        options={{
          title: i18n.t('procedures.bloodPressure.hypertensiveCrisis.title'),
          headerStyle: {
            backgroundColor: isDark ? '#1a1a1a' : '#ffffff'
          },
          headerTintColor: isDark ? '#ffffff' : '#000000'
        }}
      />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        style={styles.scrollView}
      >
        <View style={styles.contentContainer}>
          <View style={[styles.card, { backgroundColor: isDark ? '#1a1a1a' : '#ffffff' }]}>
            <View style={styles.algorithmContainer}>
              <Animated.View style={[styles.svgContainer, animatedStyle]}>
                <ScrollView
                  horizontal
                  maximumZoomScale={3}
                  minimumZoomScale={0.5}
                  showsHorizontalScrollIndicator={false}
                  showsVerticalScrollIndicator={false}
                >
                  <Svg width={svgWidth} height={svgHeight}>
                    {renderConnections()}
                    {renderNodes()}
                  </Svg>
                </ScrollView>
              </Animated.View>
            </View>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={[styles.backButton, { backgroundColor: isDark ? '#1a1a1a' : '#ffffff' }]}
        onPress={() => router.back()}
      >
        <View style={styles.backButtonContent}>
          <Ionicons
            name="arrow-back"
            size={24}
            color={isDark ? '#ffffff' : '#000000'}
          />
          <Text style={[styles.backButtonText, { color: isDark ? '#ffffff' : '#000000' }]}>
            {i18n.t('common.back')}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollView: {
    flex: 1
  },
  scrollContent: {
    flexGrow: 1
  },
  contentContainer: {
    flex: 1,
    padding: 16
  },
  card: {
    padding: 12,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3
  },
  algorithmContainer: {
    height: 850,
    width: '100%'
  },
  svgContainer: {
    backgroundColor: 'transparent'
  },
  instructionsContainer: {
    marginTop: 16,
    padding: 8,
    borderRadius: 8
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 4
  },
  bullet: {
    marginRight: 8,
    fontSize: 14
  },
  text: {
    fontSize: 14,
    flex: 1
  },
  backButton: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0, 0, 0, 0.1)'
  },
  backButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  backButtonText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: '500'
  }
});