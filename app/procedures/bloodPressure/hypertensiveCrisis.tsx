import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { Stack, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Svg, { G, Rect, Text as SvgText, Line, Polygon, TSpan } from 'react-native-svg';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  useAnimatedGestureHandler,
  withSpring,
} from 'react-native-reanimated';
import { PinchGestureHandler, PanGestureHandler, GestureHandlerRootView } from 'react-native-gesture-handler';
import i18n from '@/src/i18n';
import { useThemeStore } from '@/src/store/useThemeStore';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// Definir dimensiones del SVG aquí arriba para que estén disponibles en todo el componente
const SVG_WIDTH = 730;
const SVG_HEIGHT = 800;

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

  // Referencias para los manejadores de gestos
  const pinchRef = useRef(null);
  const panRef = useRef(null);

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
    connectionLine: isDark ? '#888888' : '#444444',
    background: isDark ? '#1a1a1a' : '#ffffff'
  };

  // Nodos del diagrama
  const [nodes, setNodes] = useState<Node[]>([
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
  const lastScale = useSharedValue(1);
  const lastTranslateX = useSharedValue(0);
  const lastTranslateY = useSharedValue(0);

  // Control de zoom y encuadre
  const MIN_SCALE = 0.5;
  const MAX_SCALE = 3;
  const initialScale = 0.7; // Escala inicial para ver mejor en móvil

  // Establecer la escala inicial
  React.useEffect(() => {
    scale.value = initialScale;

    // Mostrar mensaje de ayuda (opcional)
    setTimeout(() => {
      alert(i18n.t('common.pinchZoom') + '\n' + i18n.t('common.dragMove'));
    }, 1000);
  }, []);

  // Manejador de gesto de pellizco para zoom
  const pinchHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.scale = scale.value;
    },
    onActive: (event, ctx) => {
      let newScale = ctx.scale * event.scale;
      newScale = Math.min(Math.max(newScale, MIN_SCALE), MAX_SCALE);
      scale.value = newScale;
    },
    onEnd: () => {
      lastScale.value = scale.value;
    },
  });

  // Manejador de gesto de arrastre para navegación
  const panHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.translateX = translateX.value;
      ctx.translateY = translateY.value;
    },
    onActive: (event, ctx) => {
      translateX.value = ctx.translateX + event.translationX;
      translateY.value = ctx.translateY + event.translationY;
    },
    onEnd: () => {
      lastTranslateX.value = translateX.value;
      lastTranslateY.value = translateY.value;
    },
  });

  // Estilo animado para el contenedor SVG
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
        { scale: scale.value }
      ],
    };
  });

  // Control de límites para no perder el diagrama
  const resetView = () => {
    scale.value = withSpring(initialScale);
    translateX.value = withSpring(0);
    translateY.value = withSpring(0);
    lastScale.value = initialScale;
    lastTranslateX.value = 0;
    lastTranslateY.value = 0;
  };

  // Función para encontrar un nodo por ID
  const findNodeById = (id: string): Node | undefined => {
    return nodes.find(node => node.id === id);
  };

  // Renderizar conexiones entre nodos
  // Renderizar conexiones entre nodos
  const renderConnections = () => {
    return connections.map((connection, index) => {
      const fromNode = findNodeById(connection.fromId);
      const toNode = findNodeById(connection.toId);

      if (!fromNode || !toNode) {
        // Special case for the 'plus' connection between ntg and furosemide
        if (connection.fromId === 'ntg' && connection.toId === 'plus') {
          const ntgNode = findNodeById('ntg');
          const furosemideNode = findNodeById('furosemide');

          if (ntgNode && furosemideNode) {
            const centerX = (ntgNode.x + ntgNode.width + furosemideNode.x) / 2;
            const ntgY = ntgNode.y + ntgNode.height / 2;

            return (
              <G key={`connection-${index}`}>
                {/* Horizontal line from NTG to center */}
                <Line
                  x1={ntgNode.x + ntgNode.width}
                  y1={ntgY}
                  x2={centerX}
                  y2={ntgY}
                  stroke={colors.connectionLine}
                  strokeWidth="2"
                />

                {/* Plus symbol at the center */}
                <SvgText
                  x={centerX}
                  y={ntgY - 5}
                  textAnchor="middle"
                  fill={isDark ? colors.textLight : colors.textDark}
                  fontSize="16"
                  fontWeight="bold"
                >
                  +
                </SvgText>
              </G>
            );
          }
        } else if (connection.fromId === 'plus' && connection.toId === 'furosemide') {
          const furosemideNode = findNodeById('furosemide');
          const ntgNode = findNodeById('ntg');

          if (furosemideNode && ntgNode) {
            const centerX = (ntgNode.x + ntgNode.width + furosemideNode.x) / 2;
            const furosemideY = furosemideNode.y + furosemideNode.height / 2;
            const ntgY = ntgNode.y + ntgNode.height / 2;

            return (
              <G key={`connection-${index}`}>
                {/* Vertical line from ntg level to furosemide level */}
                <Line
                  x1={centerX}
                  y1={ntgY}
                  x2={centerX}
                  y2={furosemideY}
                  stroke={colors.connectionLine}
                  strokeWidth="2"
                />

                {/* Horizontal line from center to Furosemide */}
                <Line
                  x1={centerX}
                  y1={furosemideY}
                  x2={furosemideNode.x}
                  y2={furosemideY}
                  stroke={colors.connectionLine}
                  strokeWidth="2"
                />

                {/* Arrow at the end */}
                <Polygon
                  points={`${furosemideNode.x - 6},${furosemideY - 6} ${furosemideNode.x - 6},${furosemideY + 6} ${furosemideNode.x},${furosemideY}`}
                  fill={colors.connectionLine}
                />
              </G>
            );
          }
        }

        return null;
      }

      // For regular connections
      // Check if the connection is roughly horizontal (nodes at similar Y positions)
      const isHorizontal = Math.abs((fromNode.y + fromNode.height / 2) - (toNode.y + toNode.height / 2)) < 20;

      if (isHorizontal) {
        // For horizontal connections
        const y = (fromNode.y + fromNode.height / 2 + toNode.y + toNode.height / 2) / 2;
        const startX = fromNode.x + fromNode.width;
        const endX = toNode.x;

        return (
          <G key={`connection-${index}`}>
            <Line
              x1={startX}
              y1={y}
              x2={endX}
              y2={y}
              stroke={colors.connectionLine}
              strokeWidth="2"
            />
            <Polygon
              points={`${endX - 6},${y - 6} ${endX - 6},${y + 6} ${endX},${y}`}
              fill={colors.connectionLine}
            />
            {connection.label && (
              <SvgText
                x={(startX + endX) / 2}
                y={y - 8}
                textAnchor="middle"
                fill={isDark ? colors.textLight : colors.textDark}
                fontSize="16"
              >
                {connection.label}
              </SvgText>
            )}
          </G>
        );
      }

      // For vertical connections (nodes roughly aligned on X axis)
      const isVertical = Math.abs((fromNode.x + fromNode.width / 2) - (toNode.x + toNode.width / 2)) < 20;

      if (isVertical) {
        const x = (fromNode.x + fromNode.width / 2 + toNode.x + toNode.width / 2) / 2;
        const startY = fromNode.y + fromNode.height;
        const endY = toNode.y;

        return (
          <G key={`connection-${index}`}>
            <Line
              x1={x}
              y1={startY}
              x2={x}
              y2={endY}
              stroke={colors.connectionLine}
              strokeWidth="2"
            />
            <Polygon
              points={`${x - 6},${endY - 6} ${x + 6},${endY - 6} ${x},${endY}`}
              fill={colors.connectionLine}
            />
            {connection.label && (
              <SvgText
                x={x}
                y={(startY + endY) / 2 - 8}
                textAnchor="middle"
                fill={isDark ? colors.textLight : colors.textDark}
                fontSize="16"
              >
                {connection.label}
              </SvgText>
            )}
          </G>
        );
      }

      // For all other connections, create orthogonal routing with 3 segments
      const startX = fromNode.x + fromNode.width / 2;
      const startY = fromNode.y + fromNode.height;
      const endX = toNode.x + toNode.width / 2;
      const endY = toNode.y;

      // Calculate the midpoint Y position
      const midY = startY + (endY - startY) / 2;

      return (
        <G key={`connection-${index}`}>
          {/* Vertical segment from start to midpoint */}
          <Line
            x1={startX}
            y1={startY}
            x2={startX}
            y2={midY}
            stroke={colors.connectionLine}
            strokeWidth="2"
          />

          {/* Horizontal segment from start X to end X */}
          <Line
            x1={startX}
            y1={midY}
            x2={endX}
            y2={midY}
            stroke={colors.connectionLine}
            strokeWidth="2"
          />

          {/* Vertical segment from midpoint to end */}
          <Line
            x1={endX}
            y1={midY}
            x2={endX}
            y2={endY}
            stroke={colors.connectionLine}
            strokeWidth="2"
          />

          {/* Arrow at the end */}
          <Polygon
            points={`${endX - 6},${endY - 6} ${endX + 6},${endY - 6} ${endX},${endY}`}
            fill={colors.connectionLine}
          />

          {/* Position the label on the horizontal segment */}
          {connection.label && (
            <SvgText
              x={(startX + endX) / 2}
              y={midY - 8}
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
        {Array.isArray(node.description) && node.description.map((line, index) => (
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

  return (
    <GestureHandlerRootView style={styles.gestureContainer}>
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

        <View style={[styles.card, { backgroundColor: colors.background }]}>
          <View style={styles.controlsContainer}>
            <TouchableOpacity
              style={[styles.controlButton, { backgroundColor: isDark ? '#333' : '#eee' }]}
              onPress={resetView}
            >
              <Ionicons name="refresh" size={24} color={isDark ? '#fff' : '#333'} />
            </TouchableOpacity>
          </View>

          <PanGestureHandler
            ref={panRef}
            onGestureEvent={panHandler}
            simultaneousHandlers={pinchRef}
          >
            <Animated.View>
              <PinchGestureHandler
                ref={pinchRef}
                onGestureEvent={pinchHandler}
                simultaneousHandlers={panRef}
              >
                <Animated.View style={[styles.svgContainer, animatedStyle]}>
                  <Svg width={SVG_WIDTH} height={SVG_HEIGHT}>
                    {renderConnections()}
                    {renderNodes()}
                  </Svg>
                </Animated.View>
              </PinchGestureHandler>
            </Animated.View>
          </PanGestureHandler>
        </View>

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
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  gestureContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    position: 'relative',
  },
  card: {
    flex: 1,
    borderRadius: 12,
    margin: 16,
    padding: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    position: 'relative',
  },
  controlsContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 100,
    flexDirection: 'row',
  },
  controlButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  svgContainer: {
    backgroundColor: 'transparent',
    width: SVG_WIDTH,
    height: SVG_HEIGHT,
  },
  backButton: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0, 0, 0, 0.1)',
  },
  backButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButtonText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: '500',
  },
});