import React, { useState } from 'react';
import { View, Text, Modal, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import i18n from '@/src/i18n';
import { ProcedureLayout, Card, useTheme } from '@/app/components';
import { FlowDiagram } from '@/app/components/FlowDiagram';
import { ZoomableContainer } from '@/app/components/ZoomableContainer';
import { commonStyles } from '@/app/styles/commonStyles';
import { getHypertensiveCrisisColors, getHypertensiveCrisisNodes, getHypertensiveCrisisConnections } from '@/app/data/hypertensiveCrisisData';

const SVG_WIDTH = 730;
const SVG_HEIGHT = 800;

export default function HypertensiveCrisisScreen() {
  const { colors: themeColors, isDark } = useTheme();
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  
  const diagramColors = getHypertensiveCrisisColors(isDark);
  const nodes = getHypertensiveCrisisNodes(diagramColors);
  const connections = getHypertensiveCrisisConnections();
  
  const selectedNode = nodes.find(node => node.id === selectedNodeId);
  
  const handleNodePress = (nodeId: string) => {
    const node = nodes.find(n => n.id === nodeId);
    if (node?.description) {
      setSelectedNodeId(nodeId);
      setModalVisible(true);
    }
  };
  
  const renderDescription = (description: string | string[]) => {
    if (Array.isArray(description)) {
      return (
        <View>
          {description.map((item, index) => (
            <View key={index} style={[commonStyles.flexRow, commonStyles.listItem]}>
              <Text style={[commonStyles.listItemBullet, { color: themeColors.text }]}>•</Text>
              <Text style={{ color: themeColors.text, flex: 1 }}>{item}</Text>
            </View>
          ))}
        </View>
      );
    }
    return <Text style={{ color: themeColors.text }}>{description}</Text>;
  };
  
  return (
    <ProcedureLayout showBackButton={true}>
      <Stack.Screen 
        options={{ 
          title: i18n.t('procedures.bloodPressure.hypertensiveCrisis.title'),
          headerStyle: {
            backgroundColor: themeColors.background,
          },
          headerTintColor: themeColors.text,
        }} 
      />
      
      <Card>
        <Text style={[commonStyles.title, { color: themeColors.text }]}>
          {i18n.t('procedures.bloodPressure.hypertensiveCrisis.title')}
        </Text>
        <Text style={[commonStyles.mb16, { color: themeColors.subText }]}>
          {i18n.t('procedures.bloodPressure.hypertensiveCrisis.tapForDetails')}
        </Text>
      </Card>
      
      <Card style={{ padding: 0, overflow: 'hidden' }}>
        <ZoomableContainer contentWidth={SVG_WIDTH} contentHeight={SVG_HEIGHT}>
          <FlowDiagram
            nodes={nodes}
            connections={connections}
            svgWidth={SVG_WIDTH}
            svgHeight={SVG_HEIGHT}
            onNodePress={handleNodePress}
          />
        </ZoomableContainer>
      </Card>
      
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={[styles.modalContent, { backgroundColor: themeColors.card }]}>
            <View style={styles.modalHeader}>
              <Text style={[commonStyles.title, { color: themeColors.text, flex: 1 }]}>
                {selectedNode?.title}
              </Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Ionicons name="close" size={24} color={themeColors.text} />
              </TouchableOpacity>
            </View>
            
            <ScrollView style={styles.modalBody}>
              {selectedNode?.description && renderDescription(selectedNode.description)}
            </ScrollView>
          </View>
        </View>
      </Modal>
    </ProcedureLayout>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '90%',
    maxHeight: '80%',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  modalBody: {
    maxHeight: 400,
  },
});