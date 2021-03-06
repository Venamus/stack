import React, {Component} from 'react';
import {Text, StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import { connect } from 'react-redux';
import {CardSection} from './common';
import * as actions from '../actions';

class ListItem extends Component {

    renderDescription() {
        const { library, expanded } = this.props;

        if( expanded ) {
            return (
                <Text>{ library.description }</Text>
            )
        }
    }

    render() {
        console.log(this.props)
        const { titleStyles } = styles;
        const { id, title, description} = this.props.library;

        return (
            <TouchableWithoutFeedback onPress={ () => this.props.selectedLibrary(id)}>
                <View>
                    <CardSection>
                        <Text style={titleStyles}>{title}</Text>
                    </CardSection>
                    {this.renderDescription()}
                    {/*{id === this.props.selectedLibraryId ? <Text>{description}</Text> : null}*/}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        paddingLeft: 30
    }
})

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id;

    return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);