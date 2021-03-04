import React, { useState } from "react";
import PropTypes from "prop-types";
import OrganisationUnitTree from "d2-ui/lib/org-unit-tree/OrgUnitTree.component";
import addD2Context from "d2-ui/lib/component-helpers/addD2Context";
import noop from "d2-utilizr/lib/noop";

function OrganisationUnitTreeWithSingleSelectionAndSearch(props) {
  const [selectedNodes, setSelectedNodes] = useState([]);
  const styles = {
    labelStyle: {
      whiteSpace: "nowrap",
    },
    noHitsLabel: {
      fontStyle: "italic",
      color: "rgba(0, 0, 0, 0.4)",
    },
  };

  function onSelect(event, model) {
    let selectedLeft = [...selectedNodes];
    const indexOfModelInSelected = selectedLeft
      .map((node) => node.id)
      .indexOf(model.id);

    if (indexOfModelInSelected >= 0) {
      selectedLeft.splice(indexOfModelInSelected, 1);
    } else {
      selectedLeft.push(model);
    }
    if (selectedLeft.length === 1) {
      setSelectedNodes(selectedLeft);
      setParentData(selectedLeft);
    } else {
      if (selectedLeft.length > 1) {
        let lastItem = selectedLeft[selectedLeft.length - 1];
        setSelectedNodes([lastItem]);
        setParentData([lastItem]);
      }
    }
  }

  function setParentData(selectedLeft) {
    let orgArray = selectedLeft.map((node) => ({
      id: node.id,
      displayName: node.displayName,
    }));
    props.onChange(orgArray);
  }

  //  console.log("modelID", model.id, model.displayName); yeah kam ayega organisationUnit id and name ke liye niklane ke
  return (
    <div style={{ position: "relative" }}>
      {Array.isArray(props.roots) && props.roots.length > 0 ? (
        props.roots.map((root) => {
          return (
            <OrganisationUnitTree
              key={root.id}
              root={root}
              selected={selectedNodes.map((model) => model.path)}
              initiallyExpanded={[]}
              labelStyle={styles.labelStyle}
              onSelectClick={onSelect}
              idsThatShouldBeReloaded={[]}
              hideCheckboxes
              forceReloadChildren={props.forceReloadChildren}
            />
          );
        })
      ) : (
        <div style={styles.noHitsLabel}>{props.noHitsLabel}</div>
      )}
    </div>
  );
}
OrganisationUnitTreeWithSingleSelectionAndSearch.propTypes = {
  onOrgUnitSearch: PropTypes.func,
  onNewRequest: PropTypes.func,
  autoCompleteDataSource: PropTypes.array,
  onChangeSelectedOrgUnit: PropTypes.func,
  onAutoCompleteValueSelected: PropTypes.func,
  searchOrganisationUnits: PropTypes.func,
  roots: PropTypes.array,
  idsThatShouldBeReloaded: PropTypes.array,
  onUpdateInput: PropTypes.func,
  selected: PropTypes.array,
  initiallyExpanded: PropTypes.array,
  onSelectClick: PropTypes.func,
  noHitsLabel: PropTypes.string.isRequired,
  hideMemberCount: PropTypes.bool,
  forceReloadChildren: PropTypes.bool,
  onChange: PropTypes.func,
};
OrganisationUnitTreeWithSingleSelectionAndSearch.defaultProps = {
  onOrgUnitSearch: noop,
  onNewRequest: noop,
  onChangeSelectedOrgUnit: noop,
  onAutoCompleteValueSelected: noop,
  searchOrganisationUnits: noop,
  onUpdateInput: noop,
  initiallyExpanded: [],
  roots: [],
  autoCompleteDataSource: [],
  idsThatShouldBeReloaded: [],
  onClick: noop,
  hideMemberCount: false,
  forceReloadChildren: false,
};

export default addD2Context(OrganisationUnitTreeWithSingleSelectionAndSearch);
